"use client"

import { useRef, useState, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Text, Environment, MeshDistortMaterial } from "@react-three/drei"
import { Physics, RigidBody, BallCollider } from "@react-three/rapier"
import * as THREE from "three"

// ─── Skill data with colors ───────────────────────────────────────────────────
const skills = [
  { label: "React",      abbr: "Re",   color: "#61DAFB", text: "#0a0a0a" },
  { label: "Node.js",    abbr: "No",   color: "#8BC34A", text: "#0a0a0a" },
  { label: "TypeScript", abbr: "TS",   color: "#3178C6", text: "#ffffff" },
  { label: "MongoDB",    abbr: "Mg",   color: "#47A248", text: "#ffffff" },
  { label: "Next.js",    abbr: "Nx",   color: "#e8e8e8", text: "#0a0a0a" },
  { label: "Express",    abbr: "Ex",   color: "#f0f0f0", text: "#0a0a0a" },
  { label: "CSS3",       abbr: "CS",   color: "#264DE4", text: "#ffffff" },
  { label: "HTML5",      abbr: "HT",   color: "#E44D26", text: "#ffffff" },
  { label: "Git",        abbr: "Gi",   color: "#F05032", text: "#ffffff" },
  { label: "Figma",      abbr: "Fi",   color: "#F24E1E", text: "#ffffff" },
  { label: "JS",         abbr: "JS",   color: "#F7DF1E", text: "#0a0a0a" },
  { label: "Tailwind",   abbr: "Tw",   color: "#06B6D4", text: "#ffffff" },
]

// Random position within a sphere cluster
function randInSphere(radius: number) {
  const u = Math.random()
  const v = Math.random()
  const theta = 2 * Math.PI * u
  const phi = Math.acos(2 * v - 1)
  const r = radius * Math.cbrt(Math.random())
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi),
  ] as [number, number, number]
}

// ─── Single skill ball ────────────────────────────────────────────────────────
function SkillBall({
  skill,
  position,
}: {
  skill: (typeof skills)[0]
  position: [number, number, number]
}) {
  const rigidRef = useRef<any>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (!rigidRef.current) return
    // soft gravity toward center
    const pos = rigidRef.current.translation()
    const dist = Math.sqrt(pos.x ** 2 + pos.y ** 2 + pos.z ** 2)
    const strength = Math.max(0, dist - 1.5) * 4
    rigidRef.current.applyImpulse(
      {
        x: -pos.x * strength * 0.01,
        y: -pos.y * strength * 0.01,
        z: -pos.z * strength * 0.01,
      },
      true
    )
  })

  return (
    <RigidBody
      ref={rigidRef}
      position={position}
      colliders={false}
      linearDamping={1.8}
      angularDamping={1.5}
      restitution={0.4}
    >
      <BallCollider args={[0.62]} />
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        <sphereGeometry args={[0.6, 48, 48]} />
        <meshStandardMaterial
          color={skill.color}
          roughness={0.25}
          metalness={0.05}
          envMapIntensity={0.8}
        />
      </mesh>
      {/* Abbreviation text on front */}
      <Text
        position={[0, 0, 0.62]}
        fontSize={0.26}
        color={skill.text}
        font="/fonts/inter-bold.woff"
        anchorX="center"
        anchorY="middle"
        depthOffset={-1}
      >
        {skill.abbr}
      </Text>
      {/* Label on back */}
      <Text
        position={[0, 0, -0.62]}
        fontSize={0.14}
        color={skill.text}
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
        depthOffset={-1}
      >
        {skill.label}
      </Text>
    </RigidBody>
  )
}

// ─── Floor / invisible walls to keep balls in frame ──────────────────────────
function Boundaries() {
  return (
    <>
      {/* floor */}
      <RigidBody type="fixed" position={[0, -4.5, 0]}>
        <mesh><boxGeometry args={[30, 0.2, 30]} /><meshBasicMaterial transparent opacity={0} /></mesh>
      </RigidBody>
      {/* ceiling */}
      <RigidBody type="fixed" position={[0, 4.5, 0]}>
        <mesh><boxGeometry args={[30, 0.2, 30]} /><meshBasicMaterial transparent opacity={0} /></mesh>
      </RigidBody>
      {/* left */}
      <RigidBody type="fixed" position={[-7, 0, 0]}>
        <mesh><boxGeometry args={[0.2, 30, 30]} /><meshBasicMaterial transparent opacity={0} /></mesh>
      </RigidBody>
      {/* right */}
      <RigidBody type="fixed" position={[7, 0, 0]}>
        <mesh><boxGeometry args={[0.2, 30, 30]} /><meshBasicMaterial transparent opacity={0} /></mesh>
      </RigidBody>
    </>
  )
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene() {
  const { camera } = useThree()
  camera.position.set(0, 0, 10)

  const positions = skills.map(() => randInSphere(3.5))

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#a78bfa" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#c7d2fe" />
      <Environment preset="city" />

      <Physics gravity={[0, -1.5, 0]}>
        <Boundaries />
        {skills.map((skill, i) => (
          <SkillBall key={skill.label} skill={skill} position={positions[i]} />
        ))}
      </Physics>
    </>
  )
}

// ─── Exported component ───────────────────────────────────────────────────────
export function SkillBalls() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
