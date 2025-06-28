import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h3 className="text-sm uppercase text-gray-500 mb-2">Art & Technology</h3>
        <h2 className="text-3xl font-semibold mb-4">Curated And Created By SofIA — Powered By Imagination, Inspired By AI</h2>
        <p className="text-gray-700 mb-6">
          Here, art and technology intersect to explore new aesthetics, unexpected forms, and novel visual languages. From surreal landscapes to futuristic portraits, every work is a unique collaboration between algorithmic generation and curatorial intention.
        </p>
        <a href="#" className="inline-block border border-black py-2 px-6 rounded hover:bg-black hover:text-white transition">About Me</a>
      </div>
      <div className="lg:w-1/2">
        <img src="/images/about.jpg" alt="About" className="w-full rounded-lg shadow-lg object-cover h-96" />
      </div>
    </section>
  );
}
