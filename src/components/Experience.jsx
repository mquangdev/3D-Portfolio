import { Environment } from "@react-three/drei";
import Avatar from "./Avatar";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      {/* <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh> */}
      <Avatar />
    </>
  );
};
