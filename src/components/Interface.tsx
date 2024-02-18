import React from 'react'
import Icons from "./Icons";

const Section = (props) => {
    const {children} = props;
    return <section className='h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center'>
        {children}
    </section>


}

const Interface = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
        <Icons/>
      <AboutSection/>
        <Section>
            <h1>
                Skills
            </h1>
      </Section>
        <Section>
            <h1>Projects</h1>
      </Section>
        <Section>
            <h1>Contact</h1>
      </Section>
    </div>
  )
}


const AboutSection = () =>{
    return (
        <Section>
            <h1  className='text-6xl font-extrabold leading-snug text-[#f0f4fa]'>
               Hi there!
            </h1>
            <p className='text-[#f0f4fa]'>I'm <span className='italic'>
                    Yevhenii Kulikovskyi,
                </span></p>
            <p className='text-left mt-1 text-[#f0f4fa] w-[400px]'>A Frontend Developer with plenty of experience in freelance based in Poland, working mostly in React framework
                and know many libraries related to it. Never stop searching of new features in web developing to improve my skills.
            </p>
            <button className='btn'>Check out my Projects</button>
        </Section>
    )
}

export default Interface
