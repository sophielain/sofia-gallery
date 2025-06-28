import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Do Art With SofIA!</h1>
        <p className="mb-6 max-w-2xl">
          A space where human creativity and artificial intelligence meet. Each artwork is the result of a collaboration between SofIA's artistic vision and image generation algorithms, exploring new visual worlds, unexpected forms, and emerging aesthetics.
        </p>
        <a href="#collections" className="inline-block bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200">View Collections</a>
      </div>
    </section>
  );
}
