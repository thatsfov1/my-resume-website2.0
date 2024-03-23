import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Cursor } from "./components/Cursor";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import { Toaster } from "react-hot-toast";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollManager } from "./components/ScrollManager";

const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [dogAnimation, setDogAnimation] = useState("Standing");

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} /> 
      <Toaster />
      <Canvas shadows camera={{ position: [0.4, 0.2, 2.5], fov: 50 }}>
        <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
          <Suspense >
            {started && (
              <Experience
              dogAnimation={dogAnimation}
              setDogAnimation={setDogAnimation}
              menuOpened={menuOpened}
              section={section}
            />
            )}
          </Suspense>

          <Scroll html>
            <Interface
              onSectionChange={setSection}
              setDogAnimation={setDogAnimation}
            />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        onSectionChange={setSection}
      />
      <Cursor />
    </>
  );
};

export default App;
