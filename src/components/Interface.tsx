import React from "react";
import Icons from "./Icons";
import { skills, languages, projects } from "../constants";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Section = ({ children }) => {
  return (
    <section
      className="h-screen w-screen p-16 max-w-screen-2xl mx-auto
      flex flex-col items-start justify-center"
    >
      {children}
    </section>
  );
};

const Interface = () => {
  return (
    <>
      <Icons />
      <div className="flex flex-col items-center w-screen">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection />
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-extrabold leading-snug text-[#f0f4fa] mb-3"
      >
        Hi there!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#f0f4fa]"
      >
        I'm <span className="italic">Yevhenii Kulikovskyi,</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-left mt-1 text-[#f0f4fa] w-[400px]"
      >
        A Frontend Developer with plenty of experience in freelance based in
        Poland, working mostly in React framework and know many libraries
        related to it. Never stop searching of new features in web developing to
        improve my skills.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay:0.6 }}
        className="btn"
      >
        Check out my Projects
      </motion.button>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <motion.h1 initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}} transition={{duration:0.5}} 
        className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
          My Skills
        </motion.h1>
        <div className=" w-[500px] mt-8 flex gap-8 flex-wrap">
          {skills.map((skill) => (
            <div className="block-container w-14 h-14" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  alt={skill.name}
                  src={skill.imageUrl}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <motion.h1 initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}}
         transition={{duration:0.5, delay:0.2}} className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mt-10">
          Languages I know
        </motion.h1>
        <div>
          {languages.map((language, index) => (
            <div className="w-64" key={index}>
              <p className="text-[#f0f4fa] text-lg text-left mt-3 pl-2">
                {language.title}
              </p>
              <div className="h-2 w-full bg-[#ffffff52] rounded-full mt-2">
                <motion.div
                  className="h-full bg-[#395886] rounded-full"
                  style={{ width: `${language.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 0.5,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};


const ProjectsSection = () => {
    return (
        <Section>
          <h1 className="text-4xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
            Portfolio
          </h1>
          <p className="text-2xl text-left font-extrabold leading-snug text-[#f0f4fa] mb-3">
            Projects I've done
          </p>
          <div className='flex flex-wrap gap-4 overflow-y-scroll'>
          {projects.map((project)=>(
               <ProjectCard key={project.name} name={project.name} description={project.description} 
               iconUrl={project.iconUrl} github={project.github} liveLink={project.liveLink}/>
            ))}
          </div>
            
        </Section>
)
}

const ContactSection = () => {
  return (
    <Section>
      <div className="bg-blue-palette-100 py-5 px-2 rounded-xl">
      <h1 className="text-4xl font-extrabold  text-blue-palette-600 mb-3">Contact me</h1>
      <form className="flex flex-col gap-4 p-8 bg-white">
        <input className="p-2 rounded-lg" type="text" placeholder="Name" />
        <input className="p-2 rounded-lg" type="email" placeholder="Email" />
        <textarea className="p-2 rounded-lg h-[200px] resize-none" placeholder="Your message" />
        <button className="bg-blue-palette-600 text-blue-palette-100 p-5 w-full rounded-lg">
          Send Message
          </button>
      </form>
      </div>
     
    </Section>
  );
};

export default Interface;
