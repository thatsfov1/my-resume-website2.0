import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";
import {Avatar} from "./components/Avatar";

function App() {

  return (
    <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
        <color attach="background" args={['#ececec']}/>
        <fog attach="fog" args={["#f0f0f0", 0, 20]} />
        <Experience/>
    </Canvas>
  )
}

export default App
