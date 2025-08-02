import Project from "./Project";
import data from '../assets/projects.json';
import './Projects.css'

function Projects() {
  window.addEventListener('popstate', function () {
    window.location.reload();
    console.log("User clicked the browser buttons popstate");
  });

  return (
    <>
      <div className="project-preview-container">
        {data.projects.map((user, index) => (
          <Project key={index} project={user} />
        ))}
      </div>
    </>
  )
}

export default Projects