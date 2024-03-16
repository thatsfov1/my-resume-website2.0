import { SwiperSlide } from "swiper/react";
import "swiper/css";

import githubIcon from "../assets/icons/github.svg";

type Props = {
  isActive: boolean;
  name: string;
  iconUrl: string;
  description: string;
  liveLink: string;
  github: string;
};

const ProjectCard = ({
  isActive,
  name,
  iconUrl,
  description,
  github,
  liveLink,
}: Props) => {
  return (
    <div
      className={`bg-blue-palette-100 flex flex-col rounded-3xl p-4 w-72 h-[400px] sm:w-[350px] sm:h-[500px] ${
        isActive ? " scale-100" : "scale-90 brightness-[90%]"
      } transition-all`}
    >
      <img alt={name} src={iconUrl} className="rounded-lg" />
      <p className="text-left p-2 text-lg sm:text-xl font-bold text-slate-800">{name}</p>
      <div className=" flex-1 py-1 sm:py-2 px-2 sm:px-4 box-border text-slate-700 text-sm sm:text-base">
        {description}
        <div className="flex gap-3 absolute right-0 bottom-0 w-full p-4 items-center">
          <a
            href={github}
            target="_blank"
            className="flex-[0.2] bg-[#fff] flex items-center justify-center p-3 rounded-lg"
          >
            <img className="w-6 h-6" src={githubIcon} alt="github" />
          </a>
          <a
            className="bg-blue-palette-600 text-blue-palette-100 p-3 rounded-lg flex-1"
            href={liveLink}
            target="_blank"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
