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
      <h2>Projects</h2>

      {/* Project 1: Mobile application */}
      <div className="project-container">
        <div className="project-media mobile-images">
          <img src={notesIn1} alt="Notes In mobile app screen 1" />
          <img src={notesIn2} alt="Notes In mobile app screen 2" />
        </div>

        <div className="project-info project-info-1">
          <h3>Notes In.</h3>
          <p>
            To-do list, checklist, ideas and dumps, etc. Notes In is a
            personalized digital notebook that makes writing down ideas easy. It
            started as an idea: I wanted to create a digital writing platform
            that gives personality to the user.
          </p>
        </div>
      </div>

      {/*Project 2: Logo Design*/}

      <div className="project-container">
        <div className="project-media logo-images">
          <img src={logo1} alt="mARian logo design concept 1" />
          <img src={logo2} alt="mARian logo design concept 2" />
        </div>
        <div className="project-info project-info-2">
          <h3>mARian Logo</h3>
          <p>
            A project developed for Saint Mary's University (SMU) to improve how
            directory information is shared and to enhance promotional
            activities. Traditional signage and promotional materials had become
            outdated, faded, or inaccurate due to frequent office relocations,
            causing confusion among students and staff.
          </p>
        </div>
      </div>

      {/*Project 3: Website Design Screen*/}
      <div className="project-container">
        <div className="project-media logo-images">
          <img src={desktop1} alt="Solea jewelry website design screen 1" />
          <img src={desktop2} alt="Solea jewelry website design screen 2" />
        </div>

        <div className="project-info project-info-3">
          <h3>Web Design</h3>
          <p>
            Solea is a modern, modular fine jewelry brand designed to empower
            individuals to express themselves freely. Its products are
            versatile, allowing customers to transform a single piece into
            multiple styles. The goal of this design is to create a responsive
            homepage and modern UI/UX experience that reflects the brand's
            sophistication, creativity, and transformative nature.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Projects;
