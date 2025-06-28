import React from 'react';

export default function Banner() {
  return (
    <section className="relative bg-cover bg-center h-64 my-16" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center">
          <h2 className="text-4xl font-semibold mb-4">Univers Collection!</h2>
          <a href="#" className="inline-block border border-white py-2 px-5 rounded hover:bg-white hover:text-black transition">View Collection</a>
        </div>
      </div>
    </section>
  );
}
