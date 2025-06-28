import React from 'react';

export default function PortraitsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
         
          <div className="grid gap-4 grid-cols-2">
            <img src="/images/port1.jpg" alt="Portrait 1" className="w-full h-48 object-cover rounded-lg shadow" />
            <img src="/images/port2.jpg" alt="Portrait 2" className="w-full h-48 object-cover rounded-lg shadow" />
          </div>
           <div>
            <h2 className="text-3xl font-semibold mb-4">Discover The Art Portraits Reinvented!</h2>
            <a href="#" className="inline-block border border-black py-2 px-6 rounded hover:bg-black hover:text-white transition">See Portraits Collection</a>
          </div>
        </div>
      </div>
    </section>
  );
}
