import "../styles/About.css";
import myprofile from "../assets/my_Profile.png";
function About() {
  return (
    <section id="about" className="about">
      <div>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="myprofile">
          <img src={myprofile} alt="myprofile" />
        </div>

        <div className="about-text">
          <p>
            I'm an Information Technology graduate who enjoys combining
            technology and creativity. My journey has taken me through different
            areas of IT, from troubleshooting and infrastructure to graphic
            design and web development.
          </p>

          <p>
            As a former Graphic Design Intern and Junior Infrastructure
            Engineer, I have gained experience in both creative and technical
            environments. I am passionate about continuous learning and always
            looking for opportunities to develop new skills, build meaningful
            projects, and grow as an IT professional.
          </p>

          <p>
            This portfolio showcases my work, experiences, and the skills I
            continue to develop along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
