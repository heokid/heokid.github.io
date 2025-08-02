import { useLocation } from 'react-router-dom'
import BackButton from './BackButton';
import { useEffect, useState } from 'react';
import './ProjectDetails.css'
import Snack from './Snack';
import data from '../assets/projects.json';

export default function ProjectDetails() {

  const location = useLocation()
  const project = location.pathname.slice(1)

  function checkSlug(projectObj) {
    return projectObj.slug == project;
  }

  const projectInfo = data.projects.find(checkSlug);
  const [activeImage, setActiveImage] = useState(projectInfo.images[0])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (document.getElementById('snackcontainer') && !document.getElementById('snackcontainer')?.hasChildNodes()) {
        window.location.reload();
      }
    }, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  function handleClick(image: string) {
    setActiveImage(image);
  }

  return (
    <>
      <div className="project-details-container">
        <div className='project-images'>
          {projectInfo.type == 'snack' ?
            <Snack snackId={projectInfo.snackId} />
            :
            <>
              <img src={activeImage} />
              
            </>
          }

        </div>
        <div className='project-info'>
          <BackButton />
          <h1>{projectInfo.name}</h1>
          <p className='description'>{projectInfo.description}</p>
          <p><span className='subTitle'>Tech:</span> {projectInfo.tech}</p>
          {projectInfo.url && <p><span className='subTitle'>Demo:</span> {projectInfo.url}</p>}

        </div>

        <div className='thumbnails-container'>
                {projectInfo.images.map((image: string) => (
                  <div key={image} className={`thumbnail ${image == activeImage ? "active" : ""}`} onClick={() => {
                    handleClick(image);
                  }}>
                    <img src={image.replace('.gif', '.png')} />
                  </div>
                ))}
              </div>
      </div>

    </>
  )
}