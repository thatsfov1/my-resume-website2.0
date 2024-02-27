import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import "./App.css";
import { Cursor } from "./components/Cursor";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import ScrollManager from "./components/ScrollManager";
import {Toaster} from "react-hot-toast";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
    <Toaster />
      <Canvas shadows camera={{ position: [0.4, 0.3, 2.5], fov: 50 }}>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience menuOpened={menuOpened} section={section} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        menuOpened={menuOpened}
        section={section}
        setMenuOpened={setMenuOpened}
        onSectionChange={setSection}
      />
      <Cursor />
    </>
  );
}

export default App;
