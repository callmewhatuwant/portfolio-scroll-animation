/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";

export function Office(props) {
  const { section } = props;
  const { nodes, materials } = useGLTF("models/scene.glb");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0);
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0);
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  });


  return (
    <group {...props} dispose={null}>
      <motion.group         
        name="Desk_Chair" position={[-0.193, 0, -0.782]} rotation={[0, -0.363, 0]} scale={115.038}>
        <mesh name="Desk_Chair_1" geometry={nodes.Desk_Chair_1.geometry} material={materials.mat23} />
        <mesh name="Desk_Chair_2" geometry={nodes.Desk_Chair_2.geometry} material={materials.mat16} />
        <mesh name="Desk_Chair_3" geometry={nodes.Desk_Chair_3.geometry} material={materials.mat20} />
        <mesh name="Desk_Chair_4" geometry={nodes.Desk_Chair_4.geometry} material={materials.mat17} />
      </motion.group>
      <motion.group
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }} 
         name="mew" position={[-0.532, 2.176, -2.006]} rotation={[-Math.PI, 0.277, -Math.PI]}>
        <mesh name="mesh731660817" geometry={nodes.mesh731660817.geometry} material={textureMaterial} />
        <mesh name="mesh731660817_1" geometry={nodes.mesh731660817_1.geometry} material={textureMaterial} />
        <mesh name="mesh731660817_2" geometry={nodes.mesh731660817_2.geometry} material={textureMaterial} />
        <mesh name="mesh731660817_3" geometry={nodes.mesh731660817_3.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }} name="plant_left" position={[-2.019, -0.042, -1.526]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh name="Houseplant_7" geometry={nodes.Houseplant_7.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={textureMaterial} />
      </motion.group>
      <motion.group
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }} name="monitor" position={[0.236, 0.939, -1.723]} rotation={[Math.PI, -1.366, Math.PI]}>
        <mesh name="iMac_1" geometry={nodes.iMac_1.geometry} material={materials.ScreenBlack} />
        <mesh name="iMac_1_1" geometry={nodes.iMac_1_1.geometry} material={materials.iMacBody} />
      </motion.group>
      <group name="keyboard"  position={[-0.158, 0.981, -1.395]} rotation={[0, -0.165, 0]} scale={0.713}>
        <mesh name="mesh425587018" geometry={nodes.mesh425587018.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_1" geometry={nodes.mesh425587018_1.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_2" geometry={nodes.mesh425587018_2.geometry} material={textureMaterial} />
        <mesh name="mesh425587018_3" geometry={nodes.mesh425587018_3.geometry} material={textureMaterial} />
      </group>
      <motion.group
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }}
      name="lavalamp" 
      position={[-1.302, 2.071, -1.986]}
      
      >
        <mesh name="Node-Mesh001" geometry={nodes['Node-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_1" geometry={nodes['Node-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh001_2" geometry={nodes['Node-Mesh001_2'].geometry} material={textureMaterial} />
      </motion.group>
      <motion.group
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }} 
         name="palm_tree_01" position={[2.166, 0, -0.981]} rotation={[-Math.PI, 0.844, -Math.PI]}>
        <mesh name="palm_tree_01-Mesh001" geometry={nodes['palm_tree_01-Mesh001'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh001_1" geometry={nodes['palm_tree_01-Mesh001_1'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh001_2" geometry={nodes['palm_tree_01-Mesh001_2'].geometry} material={textureMaterial} />
      </motion.group>
      <mesh name="mouse" geometry={nodes.mouse.geometry} material={textureMaterial}  position={[0.239, 0.95, -1.306]} rotation={[-Math.PI, 0.345, -Math.PI]} />
      <group name="shelf" position={[-0.868, 1.694, -2.038]}>
        <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={textureMaterial} />
        <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={textureMaterial} />
      </group>
      <group name="speaker_right" position={[0.607, 0.936, -1.605]} rotation={[0, -0.324, 0]}>
        <mesh name="speaker003" geometry={nodes.speaker003.geometry} material={textureMaterial} />
        <mesh name="speaker003_1" geometry={nodes.speaker003_1.geometry} material={textureMaterial} />
      </group>
      <group name="speaker_left" position={[-0.389, 0.934, -1.76]} rotation={[0, 0.126, 0]}>
        <mesh name="speaker002" geometry={nodes.speaker002.geometry} material={textureMaterial} />
        <mesh name="speaker002_1" geometry={nodes.speaker002_1.geometry} material={textureMaterial} />
      </group>
      <group name="Desk" position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh name="Plane001_Plane002_BlackWood001" geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_1" geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_2" geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_3" geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={textureMaterial} />
        <mesh name="Plane001_Plane002_BlackWood001_4" geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={textureMaterial} />
      </group>

      <motion.mesh
         scale={[0, 0, 0]}
         animate={{
           scale: section === 0 ? 1 : 0,
         }}
      name="WawaRug"
      geometry={nodes.WawaRug.geometry}
      material={textureMaterial}
      position={[-0.281, 0.009, 0.765]} />

      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} />
      <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={textureGlassMaterial} />
      <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={textureMaterial} />
      <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('models/scene.glb')
