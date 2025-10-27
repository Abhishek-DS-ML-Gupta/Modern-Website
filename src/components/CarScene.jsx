import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function CarModel() {
  const { scene } = useGLTF("/model/lotus_elise.glb"); // Path inside 'public'
  return <primitive object={scene} scale={1.5} />;
}

export default function CarScene() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      camera={{ position: [0, 5, 5], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <CarModel />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
