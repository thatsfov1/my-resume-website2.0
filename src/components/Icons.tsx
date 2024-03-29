import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Icons = () => {


  return (
    <div className="text-blue-palette-400 flex pl-2 md:pl-36 pt-8 gap-2">
      <a target="_blank" href="https://github.com/thatsfov1" className="pl-2">
        <FaGithub size={30} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/thatsfov1/"
        className="pl-2"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        target="_blank"
        href="https://discordapp.com/users/699216267223105577"
        className="pl-2"
      >
        <FaDiscord size={30} />
      </a>
      <a
        target="_blank"
        href="https://www.codewars.com/users/thatsfov1"
        className="pl-2"
      >
        <SiCodewars size={30} />
      </a>
    </div>
  );
};

export default Icons;
