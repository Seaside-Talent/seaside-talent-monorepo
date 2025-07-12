'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Close the navbar when a link is clicked (useful for mobile)
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-primary fs-3" onClick={closeNav}>
          Seaside Talent
        </Link>

        {/* Use Bootstrap's data-bs-target and data-bs-toggle for collapsing */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          {/* ms-auto to push nav items to the right */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={closeNav}>
                About
              </Link>
            </li>
            {/* Add more nav items here if needed */}
            <li className="nav-item">
              <Link href="/services" className="nav-link" onClick={closeNav}>
                Services
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 mt-2 mt-lg-0"> {/* Add margin top for small screens */}
            <Link href="/contact" className="btn btn-outline-primary d-flex align-items-center gap-2" onClick={closeNav}>
              <i className="fas fa-phone"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}