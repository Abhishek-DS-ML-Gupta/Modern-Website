import CarScene from "./CarScene";
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <CarScene />
      <div className="absolute text-white opacity-60 text-center bottom-5 z-10">
        <h2 className="text-8xl font-Pilowalava mb-2 text-center" style={{ fontFamily: 'Pilowlava, sans-serif'}}>Welcome To Luxury</h2>
      </div>
    </section>
  );
}
