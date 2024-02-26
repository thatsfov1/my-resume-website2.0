import githubIcon from '../assets/icons/github.svg';

type Props = {
  name: string
  iconUrl: string
  description: string
  liveLink: string
  github:string
}

const ProjectCard = ({name,iconUrl, description, github, liveLink}:Props) => {
  return (
    <div key={name} className='bg-blue-palette-100 rounded-3xl p-4 w-[350px] h-[500px]'>
        <img alt={name} src={iconUrl} className='rounded-lg'/>
        <div className='relative'>
        <p className="text-left p-2 text-xl font-bold text-slate-800">
          {name}
          </p>
        <div className=" flex-1 py-2 px-4 box-border text-slate-700">
          {description}
          </div>
        <div className="flex w-full p-2 items-center">
        <a href={github} className="flex-[0.2] bg-black p-3 rounded-lg">
          <img className="w-5 h-5" src={githubIcon} alt="github" />
        </a>
        <a className="bg-blue-palette-600 text-blue-palette-100 p-3 rounded-lg flex-1" href={liveLink}>
            Live Link
        </a>
        
        </div>
          
        </div>
        
    </div>
  )
}

export default ProjectCard
