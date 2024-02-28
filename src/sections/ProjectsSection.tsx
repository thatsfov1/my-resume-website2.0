import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";


const ProjectsSection = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      adaptiveHeight:true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
      return (
          <>
            <h1 className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
              Portfolio
            </h1>
            <p className="text-2xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
              Projects I've done
            </p>
            <div className='flex flex-wrap gap-4 overflow-y-scroll'>
            <Slider {...settings}>
              {projects.map((project)=>(
                 <ProjectCard key={project.name} name={project.name} description={project.description} 
                 iconUrl={project.iconUrl} github={project.github} liveLink={project.liveLink}/>
              ))}
            </Slider>
            </div>
              
          </>
  )
  }


export default ProjectsSection;