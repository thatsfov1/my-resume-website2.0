import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/navigation";

const ProjectsSection = () => {
  return (
    <div className="relative mb-0 md:mb-10">
      <div className="p-4 md:px-20 py-4">
        <h1
          className="title"
        >
          Portfolio
        </h1>
        <p
          className="title text-xl md:text-2xl "
        >
          Projects I've done
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        initialSlide={2}
        modules={[Navigation]}
        spaceBetween={80}
        centeredSlides={true}
        className="swiper-container"
        breakpoints={{
          0: {
            spaceBetween: 30,
          },
          768: {
            spaceBetween: 80,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name} className="w-72 sm:w-[350px]">
            {({ isActive }) => (
              <ProjectCard
                isActive={isActive}
                key={project.name}
                name={project.name}
                description={project.description}
                iconUrl={project.iconUrl}
                github={project.github}
                liveLink={project.liveLink}
              />
            )}
          </SwiperSlide>
        ))}
        <div className="relative mt-12 w-32 left-0 right-0 mx-auto">
          <div className="swiper-button-prev after:content-['']">
            <FaArrowLeft size={30} className="text-blue-palette-100" />
          </div>
          <div className="swiper-button-next after:content-['']">
            <FaArrowRight size={30} className="text-blue-palette-100" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
