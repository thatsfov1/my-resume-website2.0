import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <div className="relative">
      <div className="px-20 py-4">
        <h1 className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
          Portfolio
        </h1>
        <p className="text-2xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
          Projects I've done
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        initialSlide={2}
        modules={[Navigation]}
        spaceBetween={80}
        centeredSlides={true}
        className="relative pb-8 w-screen"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name} className="w-[350px]">
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
        <div className="relative mt-12 w-32 left-0 right-0 mx-auto ">
          <div className="swiper-button-prev slider-arrow text-white">
            <FaArrowLeft className=" text-blue-palette-100" />
          </div>
          <div className="swiper-button-next slider-arrow ">
            <FaArrowRight className=" text-blue-palette-100" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
