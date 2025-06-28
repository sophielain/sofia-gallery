import React from 'react';
const products = [
  { title: 'Floral Reverie II', type: 'Framed Prints', price: '40.00€ – 60.00€', image: '/images/pop1.jpg' },
  { title: 'Dance Of Colors', type: 'Canvas Prints', price: '40.00€ – 60.00€', image: '/images/pop2.jpg' },
  { title: 'Modern Oasis', type: 'Framed Prints', price: '40.00€ – 60.00€', image: '/images/pop3.jpg' },
  { title: 'Floral Reverie', type: 'Framed Prints', price: '40.00€ – 60.00€', image: '/images/pop4.jpg' },
];

export default function MostPopular() {
  return (
    <section id="shop" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Most Popular</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <div key={idx} className="text-center">
              <img src={p.image} alt={p.title} className="mx-auto mb-4 w-full h-64 object-cover rounded-lg" />
              <h3 className="font-medium mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{p.type}</p>
              <p className="text-gray-800">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
