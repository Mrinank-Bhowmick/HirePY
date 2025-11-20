"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Group, Vector3, Vector2, Raycaster, Plane } from "three";
import { useFrame, useThree } from "@react-three/fiber";

export function Avatar(props: any) {
  const { scene } = useGLTF("/interviewer.glb");
  const group = useRef<Group>(null);
  const headRef = useRef<any>(null);

  // Raycasting setup following the article
  const intersectionPoint = useRef(new Vector3());
  const planeNormal = useRef(new Vector3());
  const plane = useRef(new Plane());
  const mousePosition = useRef(new Vector2());
  const raycaster = useRef(new Raycaster());
  const { camera } = useThree();

  // Find the head bone when model loads
  useEffect(() => {
    if (scene && !headRef.current) {
      // ReadyPlayer.me models use Armature structure
      // Find the "Head" bone specifically (not HeadTop_End or Wolf3D_Head)
      scene.traverse((child) => {
        if (child.name === "Head" && child.type === "Bone") {
          console.log("Found head bone:", child.name);
          headRef.current = child;
        }
      });

      // If not found, log all bones for debugging
      if (!headRef.current) {
        console.log("Available bones in model:");
        scene.traverse((child) => {
          if (child.type === "Bone") {
            console.log("- ", child.name);
          }
        });
      }
    }
  }, [scene]);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (headRef.current) {
      // Set up plane based on camera position - following the article
      planeNormal.current.copy(camera.position).normalize();
      plane.current.setFromNormalAndCoplanarPoint(
        planeNormal.current,
        scene.position
      );

      // Cast ray from camera through mouse position
      raycaster.current.setFromCamera(mousePosition.current, camera);
      raycaster.current.ray.intersectPlane(
        plane.current,
        intersectionPoint.current
      );

      // Make head look at intersection point with fixed z value (as per article)
      // Important: Using fixed z=2 to avoid issues with negative z values
      if (intersectionPoint.current) {
        headRef.current.lookAt(
          intersectionPoint.current.x,
          intersectionPoint.current.y,
          2
        );
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={1.8} position={[0, -2.8, 0]} />
    </group>
  );
}

useGLTF.preload("/interviewer.glb");
