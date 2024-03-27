import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Larmbogini(props) {
  const { nodes, materials } = useGLTF("/models/larmbogini.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Brake1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Chassislicenseplate1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Detachdoorl50interior1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Detachdoorr50carpaint1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Glassesglasswindows1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Meshpart1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Meshpart2Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Meshpart4Mtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/larmbogini.glb");
