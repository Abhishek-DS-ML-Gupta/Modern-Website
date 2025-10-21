import CarScene from "./CarScene";
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <CarScene />
      <div className="absolute text-white opacity-60 text-center bottom-2 md:bottom-10 z-10 w-full px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-Pilowalava mb-2 text-center leading-tight" style={{ fontFamily: 'Pilowlava, sans-serif'}}>
          Welcome To Luxury
        </h2>
      </div>
    </section>
  );
}
