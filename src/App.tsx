import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {

  return (
        <Canvas shadows camera={{ position: [0.4, 0.3, 2.5], fov: 50 }}>
            <Experience/>
        </Canvas>
  )
}

export default App
