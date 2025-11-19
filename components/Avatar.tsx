"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export function Avatar(props: any) {
  const { scene } = useGLTF(
    "https://models.readyplayer.me/685257be9e97ce15a519088a.glb"
  );
  const group = useRef<Group>(null);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={1.8} position={[0, -2.8, 0]} />
    </group>
  );
}

useGLTF.preload("https://models.readyplayer.me/685257be9e97ce15a519088a.glb");
