/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 /Users/sivercone/Downloads/room.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/room.glb");
  const shadowProps = { castShadow: true, receiveShadow: true };

  return (
    <group {...props} dispose={null}>
      <group
        position={[-2.714, 1.52, 0.64]}
        rotation={[1.51, 0.112, 0.501]}
        scale={0.086}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037.geometry}
          material={materials.blinn2}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_1.geometry}
          material={materials.blinn1}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_2.geometry}
          material={materials.lambert8}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_3.geometry}
          material={materials.blinn3}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_4.geometry}
          material={materials.lambert5}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_5.geometry}
          material={materials.blinn4}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_6.geometry}
          material={materials.lambert6}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_7.geometry}
          material={materials.phong1}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_8.geometry}
          material={materials.lambert3}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_9.geometry}
          material={materials.phong2}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_10.geometry}
          material={materials.lambert4}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_11.geometry}
          material={materials.lambert7}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Mesh037_12.geometry}
          material={materials.lambert2}
        />
      </group>
      <mesh
        {...shadowProps}
        geometry={nodes.table_legs001.geometry}
        material={materials.wood}
        position={[0.367, 1.637, -3.105]}
        rotation={[0, 1.571, 0]}
        scale={0.08}
      />
      <group
        position={[1.066, 1.728, -3.124]}
        rotation={[0, Math.PI / 9, 0]}
        scale={[0.527, 0.413, 0.372]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane011.geometry}
          material={materials["Screen 3mbry0n5"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane011_1.geometry}
          material={materials.ClearBlack}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane011_2.geometry}
          material={materials.Grey}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane011_3.geometry}
          material={materials["paper.003"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane011_4.geometry}
          material={materials["paper.002"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.LAPTOP001.geometry}
          material={materials.ClearBlack}
          position={[0.014, -0.096, 0.173]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.LAPTOP002.geometry}
          material={materials.ClearBlack}
          position={[0.014, -0.096, -0.068]}
          scale={[0.993, 1, 1]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.laptop_sensor.geometry}
          material={materials.Grey}
          position={[0.014, -0.096, 0.173]}
        />
      </group>
      <group position={[-2.883, 0.035, 2.761]} scale={[0.931, 1.001, 0.931]}>
        <mesh
          {...shadowProps}
          geometry={nodes.Plane015.geometry}
          material={materials.GreyLight}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane015_1.geometry}
          material={materials["screen-arcade"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane015_2.geometry}
          material={materials["screen-arcade.001"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane015_3.geometry}
          material={materials.green}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane015_4.geometry}
          material={materials["screen-arcade.002"]}
        />
        <group
          position={[0.606, 1.66, 0.486]}
          rotation={[0, 0, -0.37]}
          scale={[0.024, 0.022, 0.024]}
        >
          <mesh
            {...shadowProps}
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.metal}
          />
          <mesh
            {...shadowProps}
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.Grey}
          />
        </group>
        <group
          position={[0.606, 1.66, -0.337]}
          rotation={[0, 0, -0.37]}
          scale={[0.024, 0.022, 0.024]}
        >
          <mesh
            {...shadowProps}
            geometry={nodes.Cylinder002.geometry}
            material={materials.metal}
          />
          <mesh
            {...shadowProps}
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.GreyLight}
          />
        </group>
        <mesh
          {...shadowProps}
          geometry={nodes.game_machine001.geometry}
          material={materials.green}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.gamemachine_of_control.geometry}
          material={materials.Grey}
          position={[0.583, 1.602, 0.486]}
          rotation={[0, 0, -0.37]}
          scale={[0.122, 0.116, 0.123]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.gamemachine_of_control001.geometry}
          material={materials.Grey}
          position={[0.583, 1.602, -0.337]}
          rotation={[0, 0, -0.37]}
          scale={[0.122, 0.116, 0.123]}
        />
      </group>
      <group
        position={[-2.936, 1.88, -0.748]}
        rotation={[0, 0.065, -Math.PI / 2]}
        scale={[0.439, 0.439, 0.707]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane020.geometry}
          material={materials.ClearBlack}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane020_1.geometry}
          material={materials["screen doom"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane020_2.geometry}
          material={materials.Grey}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane020_3.geometry}
          material={materials["Black-gloss"]}
        />
      </group>
      <group
        position={[-1.189, 1.773, -2.677]}
        rotation={[0, -1.329, 0]}
        scale={[0.07, 0.025, 0.054]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Cube003.geometry}
          material={materials.Computer90}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube003_1.geometry}
          material={materials.ComputerMouse}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube003_2.geometry}
          material={materials.Grey}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube003_3.geometry}
          material={materials.GreyLight}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube003_4.geometry}
          material={materials["old pc screen"]}
        />
      </group>
      <group
        position={[-2.987, 1.946, -3.137]}
        rotation={[0.123, 0.23, -0.028]}
        scale={[0.644, 0.911, 0.315]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane024.geometry}
          material={materials.GreyLight}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane024_1.geometry}
          material={materials["Computer90.001"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane024_2.geometry}
          material={materials["old pc screen.001"]}
        />
      </group>
      <group
        position={[-2.402, 5.107, -0.348]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.09, 0.194, 0.285]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026.geometry}
          material={materials.ClearBlack}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_1.geometry}
          material={materials.Grey}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_2.geometry}
          material={materials["Black-gloss"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_3.geometry}
          material={materials["poster.002"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_4.geometry}
          material={materials.wall}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_5.geometry}
          material={materials.floor}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_6.geometry}
          material={materials.poster}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_7.geometry}
          material={materials["poster.001"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_8.geometry}
          material={materials["paper.001"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_9.geometry}
          material={materials.metal}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane026_10.geometry}
          material={materials["wood-chair"]}
        />
      </group>
      <mesh
        {...shadowProps}
        geometry={nodes.korzina.geometry}
        material={materials.ClearBlack}
        position={[3.483, 0, 1.343]}
        scale={0.602}
      />
      <group
        position={[-3.75, 3.821, -2.368]}
        rotation={[-1.679, Math.PI / 2, 0]}
        scale={[0.285, 0.345, 0.202]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane038.geometry}
          material={materials.book}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane038_1.geometry}
          material={materials["book-paper"]}
        />
      </group>
      <group
        position={[2.273, 0.772, 1.577]}
        rotation={[0, 1.032, 0]}
        scale={[0.174, 0.115, 0.139]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Plane045.geometry}
          material={materials["paper.004"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane045_1.geometry}
          material={materials.book}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane045_2.geometry}
          material={materials["book-paper"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane045_3.geometry}
          material={materials.wood}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Plane045_4.geometry}
          material={materials.paper}
        />
      </group>
      <mesh
        {...shadowProps}
        geometry={nodes.Plane005.geometry}
        material={materials.background}
        position={[0, -0.206, 0]}
        scale={19.264}
      />
      <group
        position={[2.008, 0.948, 3.038]}
        rotation={[Math.PI / 2, 0.493, -1.526]}
        scale={[0.525, 0.121, 0.519]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Cube011.geometry}
          material={materials.Grey}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube011_1.geometry}
          material={materials.sofa}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube011_2.geometry}
          material={materials.GreyLight}
        />
      </group>
      <group
        position={[-3.092, 2.866, -1.155]}
        rotation={[0, 0.127, 0]}
        scale={[0.265, 0.424, 0.241]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Cube017.geometry}
          material={materials.ClearBlack}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube017_1.geometry}
          material={materials["Black-gloss"]}
        />
      </group>
      <group
        position={[-2.709, 1.76, -2.328]}
        rotation={[0, 0.267, 0]}
        scale={[0.132, 0.01, 0.185]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Cube015.geometry}
          material={materials["compact disc"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube015_1.geometry}
          material={materials["horizon zero dawn"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube015_2.geometry}
          material={materials.ClearBlack}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube015_3.geometry}
          material={materials["the lust of us"]}
        />
      </group>
      <group position={[-2.422, 1.124, -2.124]}>
        <mesh
          {...shadowProps}
          geometry={nodes.Vert012.geometry}
          material={materials.kabel}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Vert012_1.geometry}
          material={materials.Computer90}
        />
      </group>
      <group
        position={[-0.544, 1.023, -1.359]}
        rotation={[Math.PI, -0.898, Math.PI]}
        scale={[0.567, 0.099, 0.567]}
      >
        <mesh
          {...shadowProps}
          geometry={nodes.Cube019.geometry}
          material={materials["wood-chair"]}
        />
        <mesh
          {...shadowProps}
          geometry={nodes.Cube019_1.geometry}
          material={materials.wood}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/room.glb");

export default Model;
