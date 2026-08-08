import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>

        <h1 className="hero-title">Gabriela Costa</h1>

        <h2 className="hero-subtitle">
          Computing Student | Future Cloud & Network Engineer
        </h2>

        <p className="hero-description">
          Building practical skills in Cloud Computing, Networking,
          Linux, Python and modern IT infrastructure.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>
          <button className="secondary-btn">Download CV</button>
        </div>
      </div>

      <div className="hero-image">
        <div className="avatar-placeholder">
          👩‍💻
        </div>
      </div>
    </section>
  );
}

export default Hero;