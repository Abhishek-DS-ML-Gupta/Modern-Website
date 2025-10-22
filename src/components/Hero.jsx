import CarScene from "./CarScene";
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <CarScene />
    </section>
  );
}
