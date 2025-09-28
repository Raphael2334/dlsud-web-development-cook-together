// Configuration
const PAGE_SIZE = 10;

// State
let currentOffset = 0;
let recipes = [];
let goldCount = 12500;
let gemCount = 1200;

// Format large numbers for display (e.g. 12500 -> "12.5k")
function formatNumber(n) {
  if (n >= 1000) {
    if (n >= 10000) {
      return Math.round(n / 1000) + 'k';
    }
    return (n / 1000).toFixed(1) + 'k';
  }
  return String(n);
}

// Create sample recipe data (replace later with real fetch)
function generateSampleData(count) {
  const data = [];
  for (let i = 1; i <= count; i += 1) {
    const item = {
      id: i,
      name: 'Recipe ' + i,
      price: (i % 5 === 0) ? 'FREE' : String(i * 2) + 'g',
      sold: Math.floor(Math.random() * 5000),
      rating: Number((Math.random() * 5).toFixed(1)),
      ratingCount: Math.floor(Math.random() * 2000),
      img: 'assets/images/placeholder.svg'
    };
    data.push(item);
  }
  return data;
}

// Render star symbols for a rating (0.0 - 5.0)
function renderStarsHtml(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = (rating - fullStars) >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  let stars = '';
  for (let i = 0; i < fullStars; i += 1) stars += '★';
  if (hasHalf) stars += '☆';
  for (let i = 0; i < emptyStars; i += 1) stars += '☆';

  return `<span class="text-warning">${stars}</span>`;
}

// Build a DOM element for a single recipe card
function buildRecipeCardElement(recipe) {
  const col = document.createElement('div');
  col.className = 'col';

  const card = document.createElement('div');
  card.className = 'card h-100 card-sm';

  const img = document.createElement('img');
  img.className = 'card-img-top recipe-img';
  img.src = recipe.img;
  img.alt = recipe.name;

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = recipe.name;

  const info = document.createElement('p');
  info.className = 'card-text mb-1';
  const priceSpan = document.createElement('span');
  priceSpan.className = 'fw-bold';
  priceSpan.textContent = recipe.price;
  const soldSpan = document.createElement('span');
  soldSpan.className = 'text-muted';
  soldSpan.textContent = ' • ' + formatNumber(recipe.sold) + ' sold';
  info.appendChild(priceSpan);
  info.appendChild(document.createTextNode(' '));
  info.appendChild(soldSpan);

  const ratingRow = document.createElement('p');
  ratingRow.className = 'card-text small mb-2';
  ratingRow.innerHTML = renderStarsHtml(recipe.rating) + ' ';
  const ratingCountSpan = document.createElement('span');
  ratingCountSpan.className = 'ms-2 text-muted';
  ratingCountSpan.textContent = formatNumber(recipe.ratingCount);
  ratingRow.appendChild(ratingCountSpan);

  const btn = document.createElement('button');
  btn.className = 'btn btn-sm btn-primary get-btn';
  btn.type = 'button';
  btn.textContent = 'Get';
  btn.dataset.id = recipe.id;
  btn.dataset.name = recipe.name;

  body.appendChild(title);
  body.appendChild(info);
  body.appendChild(ratingRow);
  body.appendChild(btn);

  card.appendChild(img);
  card.appendChild(body);
  col.appendChild(card);

  // Attach event listener for the Get button right away
  btn.addEventListener('click', onGetButtonClick);

  return col;
}

// Append next page of recipes to the container
function renderNextPage() {
  const container = document.getElementById('recipesContainer');
  if (!container) return;

  const start = currentOffset;
  const end = Math.min(currentOffset + PAGE_SIZE, recipes.length);
  for (let i = start; i < end; i += 1) {
    const cardElement = buildRecipeCardElement(recipes[i]);
    container.appendChild(cardElement);
  }

  currentOffset = end;

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (currentOffset >= recipes.length) {
    if (loadMoreBtn) loadMoreBtn.classList.add('d-none');
  } else {
    if (loadMoreBtn) loadMoreBtn.classList.remove('d-none');
  }
}

// Handler for the "Get" buttons on recipe cards
function onGetButtonClick(event) {
  const button = event.currentTarget;
  const recipeName = button.dataset.name;

  const modalBody = document.getElementById('getModalBody');
  modalBody.textContent = `Do you want to get "${recipeName}"?`;

  const modalElement = document.getElementById('getModal');
  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();

  const confirmBtn = document.getElementById('confirmGetBtn');
  // set onclick each time to keep it simple and clear
  confirmBtn.onclick = function () {
    bsModal.hide();
    window.alert('Confirmed: ' + recipeName);
  };
}

// Setup currency display in the header
function setCurrencyDisplay() {
  const goldEl = document.getElementById('goldCount');
  const gemEl = document.getElementById('gemCount');
  if (goldEl) goldEl.textContent = formatNumber(goldCount);
  if (gemEl) gemEl.textContent = formatNumber(gemCount);
}

// Logout confirm handler (clears local/session storage and redirects)
function setupLogoutHandler() {
  const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
  if (!confirmLogoutBtn) return;

  confirmLogoutBtn.addEventListener('click', function () {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (err) {
      // ignore errors clearing storage
    }

    const modalEl = document.getElementById('logoutModal');
    const bsModal = bootstrap.Modal.getInstance(modalEl);
    if (bsModal) bsModal.hide();

    window.location.href = 'index.html';
  });
}

// Initialize the page: prepare data, set up UI, render initial page
function initializePage() {
  setCurrencyDisplay();

  recipes = generateSampleData(35);

  renderNextPage();

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', renderNextPage);
  }

  setupLogoutHandler();
}

// Run initialization after DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);