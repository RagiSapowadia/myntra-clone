import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ onSearchChange }) {
  const handleSearchInput = (e) => {
    const query = e.target.value;
    onSearchChange(query); 
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-4 py-3">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand" href="/">
            <img
              src="https://th.bing.com/th/id/OIP.3KmDd7m8KSJrkR64QTUfNAHaEK?rs=1&pid=ImgDetMain"
              style={{ width: "60px", height: "35px" }}
              alt="Logo"
            />
          </a>

          <div className="col container-fluid" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 col-lg-12 d-flex justify-content-evenly">
              <Link className="nav-item dropdown text-decoration-none text-dark text-center col-lg-1 fw-bold" to="/men">
                <span>Men</span>
              </Link>
              <Link className="nav-item text-decoration-none text-dark text-center fw-bold" to="/women">
                Women
              </Link>
              <Link className="nav-item text-decoration-none text-dark text-center fw-bold" to="/kids">
                Kids
              </Link>
              <Link className="nav-item text-decoration-none text-dark text-center fw-bold" to="/home-living">
                Home & Living
              </Link>
              <Link className="nav-item text-decoration-none text-dark text-center fw-bold" to="/beauty">
                Beauty
              </Link>
              <Link className="nav-item text-decoration-none text-dark text-center fw-bold" to="/studio">
                Studio
              </Link>
            </ul>
          </div>

          <div className="flex-grow-1">
            <form
              className="d-flex align-items-center ps-3 border rounded bg-body-secondary"
              role="search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                id="searchInput"
                className="form-control me-2 border-0 bg-body-secondary"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
                
                onChange={handleSearchInput}
              />
            </form>
          </div>

          <div className="me-1">
            <ul className="row my-auto">
              <Link className="text-dark text-decoration-none text-center col-3" to="/login">
                <i className="fa-solid fa-user fs-6"></i>Profile
              </Link>
              <Link  className="text-dark text-decoration-none text-center col-4" to="/wishlist">
                <i className="fa-solid fa-heart fs-6"></i>WishList
              </Link>
              <Link className="text-dark text-decoration-none text-center col-3" to="/bagContainer">
                <i className="fa-solid fa-bag-shopping fs-6"></i>Bag
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
