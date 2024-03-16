import Icons from "./Icons";
import ContactSection from "../sections/ContactSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";

const Section = ({
  children,
  mobileTop,
}: {
  children: React.ReactNode;
  mobileTop?: true;
}) => {
  return (
    <section
      className={`h-screen w-screen p-4 md:p-16 max-w-screen-2xl mx-auto
      flex flex-col items-start ${
        mobileTop ? "justify-start md:justify-center" : "justify-center"
      }
      
  `}
    >
      {children}
    </section>
  );
};

type Props = {
  setDogAnimation: React.Dispatch<React.SetStateAction<string>>;
};

const Interface = ({ setDogAnimation }: Props) => {
  return (
    <>
      <Icons />
      <div className="flex flex-col items-center w-screen">
        <Section mobileTop>
          <AboutSection />
        </Section>
        <Section>
          <SkillsSection />
        </Section>
        <ProjectsSection />
        <Section>
          <ContactSection setDogAnimation={setDogAnimation} />
        </Section>
      </div>
    </>
  );
};

export default Interface;
