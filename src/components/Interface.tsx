import React, { useState } from "react";
import Icons from "./Icons";
import { skills, languages, projects } from "../constants";
import { motion } from "framer-motion";
import ContactSection from "../sections/ContactSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";


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
        <Section>
          <AboutSection />
        </Section>
        <Section>
           <SkillsSection />
        </Section>
          <ProjectsSection/>
        <Section>
          <ContactSection />
        </Section>
        
      </div>
    </>
  );
};



export default Interface;
