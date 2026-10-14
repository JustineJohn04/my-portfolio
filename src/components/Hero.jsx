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
        <a className="primary-btn" href="#projects">
          View Projects
        </a>

        <a className="secondary-btn" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
