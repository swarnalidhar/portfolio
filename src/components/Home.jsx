import React from "react";

const Home = () => {
  return (
    <main className="hero">
      {/* LEFT SIDE */}
      <section className="hero-left">
        <div className="hero-heading">
          <p className="hero-hi">Hi! I’m</p>
          <h1 className="hero-name">Swarnali</h1>
          <p className="hero-role">An UI/UX Designer</p>
        </div>

        <p className="hero-description">
          A dedicated UI/UX designer focused on creating intuitive,
          user-centered digital experiences. With a strong eye for detail and a
          problem-solving mindset, I turn complex challenges into clear and
          impactful designs.
        </p>

        <button className="scroll-btn">
          Scroll for more <span className="scroll-arrow">⌄⌄</span>
        </button>

        <div className="social-row">
          {/* Replace with icons (e.g. react-icons) later if you want */}
          <span className="social-dot">●</span>
          <span className="social-icon">🟢</span>
          <span className="social-icon">📘</span>
          <span className="social-icon">📸</span>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="hero-right">
        <div className="portrait-arch">
          {/* Put your real image in /public and change src */}
          <img
            src="/portrait.jpg"
            alt="Profile"
            className="portrait-image"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;