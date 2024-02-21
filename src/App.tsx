import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";
import {Scroll, ScrollControls} from "@react-three/drei";
import Interface from "./components/Interface";
import Icons from "./components/Icons";
import ScrollManager from "./components/ScrollManager";
import {useState} from "react";

function App() {

    const [section, setSection] = useState(0);

    return (
      <>

        <Canvas shadows camera={{ position: [0.4, 0.3, 2.5], fov: 50 }}>
            <ScrollControls pages={4} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection}/>
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
