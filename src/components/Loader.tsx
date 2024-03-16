import loader from '../assets/icons/loader.svg'


const Loader = () => {
  return (
    <div className="w-full h-full z-10 flex 
    justify-center items-center ">
        <img className="w-20" src={loader} alt="Loading..." />
    </div>
  )
}

export default Loader