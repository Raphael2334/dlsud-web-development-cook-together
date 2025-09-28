const PAGE_SIZE=10;
let pageOffset=0,recipes=[],goldCount=12500,gemCount=1200;

function fmt(n){return n>=1000?(n/1000).toFixed(n>=10000?0:1)+'k':String(n)}

function generateSampleData(n=35){
  return Array.from({length:n},(_,i)=>({
    id:i+1,
    name:`Recipe ${i+1}`,
    price:(i+1)%5===0?'FREE':`${((i+1)*2).toFixed(0)}g`,
    sold:Math.floor(Math.random()*5000),
    rating:+(Math.random()*5).toFixed(1),
    ratingCount:Math.floor(Math.random()*2000),
    img:'assets/images/placeholder.svg'
  }))
}

function renderStars(r){
  const full=Math.floor(r),half=r-full>=.5?1:0,empty=5-full-half;
  return `<span class="text-warning">${'★'.repeat(full)}${half?'☆':''}${'☆'.repeat(empty)}</span>`
}

function createCardHTML(r){
  return `<div class="col">
    <div class="card h-100 card-sm">
      <img src="${r.img}" class="card-img-top recipe-img" alt="${r.name}">
      <div class="card-body">
        <h5 class="card-title">${r.name}</h5>
        <p class="card-text mb-1"><span class="fw-bold">${r.price}</span><span class="text-muted"> • ${fmt(r.sold)} sold</span></p>
        <p class="card-text small mb-2">${renderStars(r.rating)}<span class="ms-2 text-muted">${fmt(r.ratingCount)}</span></p>
        <button class="btn btn-sm btn-primary get-btn" data-id="${r.id}" data-name="${r.name}">Get</button>
      </div>
    </div>
  </div>`
}

function renderNext(){
  const c=document.getElementById('recipesContainer');
  recipes.slice(pageOffset,pageOffset+PAGE_SIZE).forEach(r=>c.insertAdjacentHTML('beforeend',createCardHTML(r)));
  pageOffset+=PAGE_SIZE;
  if(pageOffset>=recipes.length)document.getElementById('loadMoreBtn').classList.add('d-none');
  document.querySelectorAll('.get-btn').forEach(b=>{
    b.removeEventListener('click',onGetClick);
    b.addEventListener('click',onGetClick)
  })
}

function onGetClick(e){
  const n=e.currentTarget.dataset.name;
  document.getElementById('getModalBody').textContent=`Do you want to get "${n}"?`;
  const m=new bootstrap.Modal(document.getElementById('getModal'));m.show();
  document.getElementById('confirmGetBtn').onclick=()=>{m.hide();alert(`Confirmed: ${n}`)}
}

function initPage(){
  document.getElementById('goldCount').textContent=fmt(goldCount);
  document.getElementById('gemCount').textContent=fmt(gemCount);
  recipes=generateSampleData(35);
  renderNext();
  document.getElementById('loadMoreBtn').addEventListener('click',renderNext)
}

document.addEventListener('DOMContentLoaded',initPage);