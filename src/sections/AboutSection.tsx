import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="text-left p-0 md:p-20 mt-8 md:mt-0">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold leading-snug text-[#f0f4fa] mb-3"
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
        className="text-left mt-1 text-[#f0f4fa] max-w-[400px]"
      >
        A Frontend Developer with plenty of experience in freelance based in
        Poland, working mostly in React framework and know many libraries
        related to it. Never stop searching of new features in web developing to
        improve my skills.
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="btn"
      >
        Check out my Projects
      </motion.button>
    </div>
  );
};

export default AboutSection;
