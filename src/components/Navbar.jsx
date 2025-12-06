import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left nav (menu) */}
      <nav className="navbar-menu">
        <button className="nav-pill nav-pill-active">Home</button>
        <button className="nav-link">About</button>
        <button className="nav-link">Work</button>
        <button className="nav-link">Contact</button>
      </nav>

      {/* Right side – Download CV */}
      <div className="navbar-right">
        {/* use Link or <a> depending on how you serve the file */}
        <a href="/cv.pdf" className="download-link">
          Download CV <span className="download-icon">⬇️</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;