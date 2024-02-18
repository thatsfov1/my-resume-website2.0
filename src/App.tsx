import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";
import {Scroll, ScrollControls} from "@react-three/drei";
import Interface from "./components/Interface";
import Icons from "./components/Icons";

function App() {

  return (
      <>

        <Canvas shadows camera={{ position: [0.4, 0.3, 2.5], fov: 50 }}>
            <ScrollControls pages={4} damping={0.1}>
                <Experience/>
                <Scroll html>
                    <Interface/>
                </Scroll>
            </ScrollControls>
        </Canvas>
      </>

  )
}

export default App
