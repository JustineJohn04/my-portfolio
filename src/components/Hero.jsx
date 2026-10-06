import "../styles/Hero.css";

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <h1>Justine John Montalbo</h1>

      <div className="primary-prgph">
        <p>
          I am an Information Technology graduate with a passion for both
          technology and creativity.
        </p>
      </div>

      <div className="hero-buttons">
        <button className="primary-btn">
          <a className="btn-1" href="#projects">
            View Projects
          </a>
        </button>

        <button className="secondary-btn">
          <a className="btn-2" href="#contact">
            Contact
          </a>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
