import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectsSection = () => {
  return (
    <div className="mb-10 relative">
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
          clickable: true,
        }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={80}
        centeredSlides={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.name} className="w-[350px]">
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              iconUrl={project.iconUrl}
              github={project.github}
              liveLink={project.liveLink}
            />
          </SwiperSlide>
        ))}
        <div className="">
          <div className="swiper-button-prev ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectsSection;
