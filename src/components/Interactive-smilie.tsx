"use client"

import {  useFrame } from "@react-three/fiber"
import {
  Sphere,
  MeshDistortMaterial,
  Text3D,
} from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

interface InteractiveBlobProps {
  text?: string
}

export default function InteractiveBlob({ text = "Let's connect </>" }: InteractiveBlobProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const floatAmplitude = 0.2

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * floatAmplitude
      groupRef.current.lookAt(state.camera.position)
    }
  })

  return (
    <group
      ref={groupRef}
      scale={hovered ? 1.1 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Blob */}
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#a855f1"
          distort={hovered ? 0.6 : 0.4}
          speed={2}
          roughness={0.1}
        />
      </Sphere>

      {/* Eyes */}
      <mesh position={[-0.4, 0.4, 0.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0.4, 0.4, 0.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Pupils */}
      <mesh position={[-0.4, 0.4, 1.05]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.4, 0.4, 1.05]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, -0.2, 0.9]} rotation={[Math.PI / 1.2, 0, 0]}>
        <torusGeometry args={[0.3, 0.03, 16, 100, Math.PI]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Floating Text */}
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.2}
        height={0.05}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.005}
        bevelSegments={2}
        position={[-0.8, 1.4, 0]}
      >
        {text}
        <meshBasicMaterial color="#c5c5c5" />
      </Text3D>
    </group>
  )
}
