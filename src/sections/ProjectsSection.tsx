import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProjectsSection = () => {

      return (
          <>
            <h1 className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
              Portfolio
            </h1>
            <p className="text-2xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
              Projects I've done
            </p>
            <div className=''>
            <Carousel>
                {projects.map((project)=>(
                    <ProjectCard key={project.name} name={project.name} description={project.description} 
                        iconUrl={project.iconUrl} github={project.github} liveLink={project.liveLink}/>
                ))}
            </Carousel>
            </div>
              
          </>
  )
  }


export default ProjectsSection;


