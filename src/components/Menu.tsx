type Props = {
    menuOpened: boolean
    setMenuOpened:React.Dispatch<React.SetStateAction<boolean>>,
    onSectionChange:React.Dispatch<React.SetStateAction<number>>
}

const Menu = ({menuOpened, setMenuOpened, onSectionChange}:Props) => {

  return (
    <>
    <button onClick={() =>setMenuOpened(!menuOpened)} 
    className="z-20 fixed top-5 right-12 w-6 h-11 rounded-md">
        <div className={` h-1 rounded-xl w-full transition-all 
        ${menuOpened ? "rotate-45 translate-y-1 bg-blue-palette-600" : "bg-blue-palette-100"}`}/>
        <div  className={`bg-blue-palette-100 h-1 rounded-xl w-full my-1
        ${menuOpened && "hidden"}`}/>
        <div  className={` h-1 rounded-xl w-full transition-all 
        ${menuOpened ? "-rotate-45 bg-blue-palette-600" : "bg-blue-palette-100"}`}/>
    </button>
    <div className={`z-10 fixed top-0 right-0 bottom-0 bg-blue-palette-100 transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-[400px]" : "w-0"} `} >
        <div className="flex flex-1 items-start flex-col gap-6 p-8 " >
            <MenuItem label="About" onClick={()=> onSectionChange(0)}/>
            <MenuItem label="Skills" onClick={()=> onSectionChange(1)}/>
            <MenuItem label="Projects" onClick={()=> onSectionChange(2)}/>
            <MenuItem label="Contact" onClick={()=> onSectionChange(3)}/>
        </div>
    </div>
    </>
  )
}

type ItemProps = {
    label: string,
    onClick: Function
}

const MenuItem = ({label, onClick}:ItemProps) => {
    return <div onClick={onClick} className="cursor-pointer font-bold text-blue-palette-600">
        {label}
    </div>
}




export default Menu;