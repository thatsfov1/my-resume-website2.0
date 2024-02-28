import {motion} from 'framer-motion';
import { skills, languages } from "../constants";


const SkillsSection = () => {
    return (
      <>
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
      </>
    );
  };


export default SkillsSection;