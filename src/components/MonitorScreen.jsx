import { useTexture } from "@react-three/drei";
import { useAtom } from "jotai";
import React from "react";
import { config } from "../config";
import { projectAtom } from "./Interface";

function MonitorScreen({ ...props }) {
  const [project] = useAtom(projectAtom);
  const texture = useTexture(project.image);
  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[1.14, 0.66]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  );
}

export default MonitorScreen;
config.projects.forEach((project) => {
  useTexture.preload(project.image);
});
