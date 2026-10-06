import "../styles/Projects.css";
import notesIn1 from "../assets-2/NotesIn-1.jpg";
import notesIn2 from "../assets-2/NotesIn-2.jpg";

import logo1 from "../assets-2/logo1.png";
import logo2 from "../assets-2/logo2.png";

import desktop1 from "../assets-2/Desktop3.png";
import desktop2 from "../assets-2/Desktop5.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <h2>Projects</h2>
      </div>

      <div className="project-container">
        <div className="mobile-images">
          <img src={notesIn1} alt="notesIn1" />
          <img src={notesIn2} alt="notesIn2" />
        </div>

        <div className="project-info-1">
          <div>
            <h3>Notes In.</h3>
          </div>
          <p>
            To-do list, checklist, ideas and dumps etc. Notes In is a
            personalize digital notebook writing your ideas made easy. It
            started as an idea, i wanted to create a digital writing platform
            that gives personality to user.
          </p>
        </div>
      </div>

      <div className="project-container">
        <div>
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo2" />
        </div>
        <div className="project-info-2">
          <div>
            <h3>mARian Logo</h3>
          </div>

          <p>
            A project that is developed an for Saint Mary's University (SMU) to
            improve how directory information is disseminated and to enhance
            promotional activities. Traditional signage and promotional
            techniques at SMU were outdated, faded, or inaccurate due to
            frequent office relocations, leading to disorientation among
            students and staff.
          </p>
        </div>
      </div>

      <div className="project-container">
        <div>
          <img src={desktop1} alt="desktop1" />
          <img src={desktop2} alt="desktop2" />
        </div>
        <div className="project-info-3">
          <h3>Web Design</h3>
          <p>
            Solea is a modern, modular find jewelry brand designed to empower
            individuals to express themselves freely. its products are verstile
            allowing customers to transform a single piece into multiple styles.
            the goal of this design is to create a responsive homepage and
            modern UI/UX experience that reflects the brands sophistication,
            creativity and transformative nature.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Projects;
