"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, Vector3, Vector2, Raycaster, Plane, Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";

export function Avatar(props: any) {
  const { scene, animations } = useGLTF("/animated-model.glb");
  const group = useRef<Group>(null);
  const { actions } = useAnimations(animations, group);
  const headRef = useRef<any>(null);

  useEffect(() => {
    if (actions) {
      const actionNames = Object.keys(actions);
      if (actionNames.length > 0) {
        actions[actionNames[0]]?.reset().fadeIn(0.5).play();
      }
    }
  }, [actions]);

  // Raycasting setup following the article
  const intersectionPoint = useRef(new Vector3());
  const planeNormal = useRef(new Vector3());
  const plane = useRef(new Plane());
  const mousePosition = useRef(new Vector2());
  const raycaster = useRef(new Raycaster());
  const { camera } = useThree();

  // Find the head bone and setup meshes when model loads
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.frustumCulled = false;
        }
        if (child.name === "Head" && child.type === "Bone") {
          console.log("Found head bone:", child.name);
          headRef.current = child;
        }
      });
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
      <primitive
        object={scene}
        scale={1.6}
        position={[0.2, -1.8, 0]}
        rotation={[0, -0.3, 0]}
      />
    </group>
  );
}

useGLTF.preload("/animated-model.glb");
