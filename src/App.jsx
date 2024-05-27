import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interfaces";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";

function App() {
  const [section, setsection] = useState(0);

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager secion={section} onSectionChange = {setsection}/>
          <Experience />
          <Scroll html>
            <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
