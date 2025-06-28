import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">SofIA</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">{/* SVG aquí */}</button>
          <button aria-label="Cart">{/* SVG aquí */}</button>
        </div>
      </div>
    </header>
  );
}
