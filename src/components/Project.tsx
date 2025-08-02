/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

function Project({ project }: { project: any }) {
  return (
    <>
      <Link to={project.type == 'placeholder' ? '/' : `/${project.slug}`} state={{ projectInfo: project }}>
        <div className={`project-preview ${project.type == 'placeholder' ? "placeholder" : ""}`} style={{ backgroundImage: `url(${project.type == 'placeholder' ? '' : project.previewImage})` }}>
          <span>{project.name}</span>
        </div>
      </Link>
    </>
  )
}

export default Project