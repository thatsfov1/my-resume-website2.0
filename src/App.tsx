import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Cursor } from "./components/Cursor";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Canvas shadows camera={{ position: [0.4, 0.2, 2.5], fov: 50 }}>
        <ScrollControls pages={4} maxSpeed={0.5} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience menuOpened={menuOpened} section={section} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        onSectionChange={setSection}
      />
      <Cursor />
    </Suspense>
  );
}

export default App;
