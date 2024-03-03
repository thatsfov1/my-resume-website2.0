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
      className="h-screen w-screen max-w-screen-2xl mx-auto
      flex flex-col items-start justify-center snap-start"
    >
      {children}
    </section>
  );
};

const Interface = () => {

  return (
    <>
      <Icons />
      <div className="sections-container">
        <Section>
          <AboutSection />
        </Section>
        <Section>
           <SkillsSection />
        </Section>
        <Section>
          <ProjectsSection/>
        </Section>
        <Section>
          <ContactSection />
        </Section>
        
      </div>
    </>
  );
};



export default Interface;
