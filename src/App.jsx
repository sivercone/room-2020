import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { PointLightHelper, SpotLightHelper } from "three";
// import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import Room from "./Room";

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          gap: 35,
          alignItems: "center",
          padding: 40,
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            flex: 1,
            marginLeft: 35,
            display: "flex",
            alignItems: "flex-end",
            gap: 35,
            justifyContent: "space-between",
            fontSize: "0.8rem",
          }}
        >
          <p>room 2020</p>
          <a
            href="https://twitter.com/sivercone"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sivercone
          </a>
        </div>
      </div>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <p>loading scene...</p>
          </div>
        }
      >
        <Canvas shadows style={{ backgroundColor: "#666" }}>
          <Scene />
        </Canvas>
      </Suspense>
    </>
  );
}

const Scene = () => {
  // Create references for the lights
  const ambientLightRef = React.useRef();
  const spotLightRef = React.useRef();
  // Use the helpers to visualize the lights
  // useHelper(ambientLightRef, PointLightHelper, 0.5);
  // useHelper(spotLightRef, SpotLightHelper, 0.5);

  // Set up controls using leva
  const controls = useControls({
    ambientIntensity: { value: 0.6, min: 0, max: 2, step: 0.1 },
    spotLightIntensity: { value: 180, min: 0, max: 2000, step: 1 },
    spotLightPosition: { value: [3, 8, 3] },
    spotLightColor: "#ae73ff",
  });

  const shadowProps = {
    "shadow-mapSize-width": 1024,
    "shadow-mapSize-height": 1024,
    "shadow-bias": -0.0001,
  };

  return (
    <PerspectiveCamera position={[0, -3, -1]} rotation={[0, -1, 0]}>
      <OrbitControls
        enableDamping
        dampingFactor={0.05} // Adjust as needed. Higher values will make damping more pronounced.
        rotateSpeed={0.5} // Adjust as needed. Default is 1.
        panSpeed={0.5} // Adjust as needed. Default is 1.
        zoomSpeed={0.5}
      />
      <ambientLight
        ref={ambientLightRef}
        position={[0, 3, 0]}
        intensity={controls.ambientIntensity}
      />

      <spotLight
        castShadow
        {...shadowProps}
        ref={spotLightRef}
        position={controls.spotLightPosition}
        intensity={controls.spotLightIntensity}
        color={controls.spotLightColor}
      />

      <spotLight
        castShadow
        position={[-15, 5, -0.5]}
        intensity={300}
        color={"#3CE500"}
      />
      <spotLight
        castShadow
        position={[-15, 10, -15]}
        intensity={400}
        color={"#0B00FF"}
      />
      <spotLight
        castShadow
        position={[0, 5, -15]}
        intensity={300}
        color={"#FF002B"}
      />
      <Room />
    </PerspectiveCamera>
  );
};

export default App;
