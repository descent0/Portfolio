"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Environment,
  Trail,
  Text3D,
} from "@react-three/drei"
import { useRef, useState, useMemo, useEffect } from "react"
import * as THREE from "three"

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

function AnimatedSphere() {
  const isMobile = useIsMobile()
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere
      ref={meshRef}
      args={[1, 100, 200]}
      position={[0, 0, -3.5]}
      scale={isMobile ? 1.2 : 2}
    >
      <MeshDistortMaterial
        color="#8b5cf6"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  )
}

function Meteor({ speed = 0.3 }) {
  const meteorRef = useRef<THREE.Mesh>(null)
  const direction = useMemo(
    () => new THREE.Vector2(-1, -0.5).normalize().multiplyScalar(speed),
    [speed]
  )

  const reset = () => {
    if (meteorRef.current) {
      meteorRef.current.position.set(
        Math.random() * 10 + 5,
        Math.random() * 5 + 2,
        -5 + Math.random() * 2
      )
    }
  }

  useEffect(() => {
    reset()
  }, [])

  useFrame(() => {
    if (!meteorRef.current) return
    meteorRef.current.position.x += direction.x
    meteorRef.current.position.y += direction.y

    if (meteorRef.current.position.x < -10 || meteorRef.current.position.y < -6) {
      reset()
    }
  })

  return (
    <Trail
      width={0.2}
      length={3}
      decay={0.9}
      color="#c084fc"
      attenuation={(t) => t * t}
    >
      <mesh ref={meteorRef}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#c084fc" />
      </mesh>
    </Trail>
  )
}

function MeteorShower({ count = 15 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Meteor key={i} speed={0.15 + Math.random() * 0.2} />
      ))}
    </>
  )
}

function TextIn3D() {
  const isMobile = useIsMobile()

  const roles = [
    "A Full-Stack Developer",
    "A Problem Solver",
    "A JavaScript Enthusiast",
    "A Tech Explorer"
  ]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[index]
    const interval = setInterval(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1)
          setText(currentRole.slice(0, charIndex - 1))
        } else {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % roles.length)
        }
      } else {
        if (charIndex < currentRole.length) {
          setCharIndex((prev) => prev + 1)
          setText(currentRole.slice(0, charIndex + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 800)
        }
      }
    }, 100)

    return () => clearInterval(interval)
  }, [charIndex, isDeleting, index])

  const nameSize = isMobile ? 0.25 : 0.5
  const roleSize = isMobile ? 0.2 : 0.3
  const descSize = isMobile ? 0.13 : 0.2
 const namePos: [number, number, number] = isMobile ? [-1.7, 1.2, 0] : [-3.2, 1.5, 0]
const rolePos: [number, number, number] = isMobile ? [-1.7, 0.55, 0] : [-2.5, 0.8, 0]
const descPos: [number, number, number] = isMobile ? [-1.7, -0.1, 0] : [-2.5, 0.1, 0]
  return (
    <>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={nameSize}
        height={0.08}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.015}
        bevelSegments={4}
        position={namePos}
      >
        Hi, I'm Dishant Rajput
        <meshBasicMaterial color="#CDCDCD" />
      </Text3D>

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={roleSize}
        height={0.06}
        bevelEnabled
        bevelThickness={0.015}
        bevelSize={0.01}
        bevelSegments={3}
        position={rolePos}
      >
        {text}
        <meshBasicMaterial color="#c084fc" />
      </Text3D>

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={descSize}
        height={0.05}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.008}
        bevelSegments={2}
        position={descPos}
      >
        CSE Student @ KIET Group of Institutions
        <meshBasicMaterial color="#CDCDCD" />
      </Text3D>
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <AnimatedSphere />
        <MeteorShower count={20} />
        <TextIn3D />

        <Environment preset="night" />
        <OrbitControls target={[0, 0.3, 0]} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
