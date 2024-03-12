import Icons from "./Icons";
import ContactSection from "../sections/ContactSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";


const Section = ({ children }:{children:React.ReactNode}) => {
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
