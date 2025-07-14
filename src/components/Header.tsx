import React from 'react';

const navLinks = [
  { label: 'About Me', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Testimonials', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-6 px-4 md:px-12 max-w-5xl mx-auto">
      <div className="text-2xl font-bold text-white">
        <span className="text-[#b993fe]">by</span>
        <span className="ml-1 text-[#eeaeca]">Damirbek</span>
      </div>
      <nav className="hidden md:flex gap-4 bg-[#10102b] rounded-xl px-6 py-2 text-white text-sm font-medium">
        {navLinks.map(link => (
          <a key={link.label} href={link.href} className="px-3 py-1 rounded-lg hover:bg-[#181846] transition">
            {link.label}
          </a>
        ))}
      </nav>
      <a href="#" className="hidden md:block bg-[#10102b] text-white px-6 py-2 rounded-xl font-medium border border-[#23234d] hover:bg-[#181846] transition">
        Download CV
      </a>
      {/* Mobile nav */}
      <button className="md:hidden text-white text-2xl">☰</button>
    </header>
  );
} 