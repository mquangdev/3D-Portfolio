import { Text3D } from "@react-three/drei";
import React from "react";

function SectionTitle({ children, ...props }) {
  return (
    <Text3D size={0.3} {...props} font={"/fonts/Inter_Bold.json"}>
      {children}
      <meshStandardMaterial color="white" />
    </Text3D>
  );
}

export default SectionTitle;
