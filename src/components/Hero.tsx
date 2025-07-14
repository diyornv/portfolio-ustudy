import React from 'react';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center mt-10 mb-8 px-4">
      <p className="uppercase tracking-widest text-xs md:text-sm text-[#b993fe] mb-2">Dynamic web magic with next.js</p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
        Transforming Concepts into <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-[#b993fe] to-[#eeaeca] bg-clip-text text-transparent">Seamless User Experiences</span>
      </h1>
      <p className="text-[#b0b0d0] text-base md:text-lg mb-6 max-w-xl">
        Hi! I'm Damirbek, a Frontend Engineer based in Uzbekistan.
      </p>
      <a href="#" className="inline-block bg-[#10102b] text-white px-8 py-3 rounded-xl font-medium border border-[#23234d] hover:bg-[#181846] transition text-base md:text-lg">
        See my work <span className="ml-2">→</span>
      </a>
    </section>
  );
} 