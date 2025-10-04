import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="index.html">
          <img
            src="assets/images/logo.png"
            alt="Cook Together"
            width="36"
            height="36"
            className="d-inline-block align-text-top"
          />
          <span className="ms-2 fw-bold">Cook Together</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navCollapse">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <a className="btn btn-outline-dark btn-sm" href="inventory.html" role="button">
                INVENTORY
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-dark btn-sm" href="shop.html" role="button">
                SHOP
              </a>
            </li>

            <li className="nav-item d-flex align-items-center ms-2">
              <span className="me-3 small text-muted">
                🪙 <strong id="goldCount">0</strong>
              </span>
              <span className="me-3 small text-muted">
                💎 <strong id="gemCount">0</strong>
              </span>
            </li>

            <li className="nav-item dropdown">
              <button
                className="btn btn-light btn-sm dropdown-toggle"
                id="dropdownNotif"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🔔
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownNotif">
                <li>
                  <h6 className="dropdown-header">Notifications</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    No new notifications
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="btn btn-light btn-sm" href="people-friends.html" role="button">
                👥
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-light btn-sm" href="login.html" role="button">
                👤
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-light btn-sm" href="settings.html" role="button">
                ⚙️
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
