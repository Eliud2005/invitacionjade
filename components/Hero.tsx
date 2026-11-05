"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Fondo para Celular (Vertical) */}
      <Image
        src="/images/fondocarta.png" 
        alt="La noche estrellada"
        fill
        priority
        className="object-cover object-center md:hidden"
      />

      {/* Fondo para Computadora (Horizontal) */}
      <Image
        src="/images/fondocarta2.png" 
        alt="La noche estrellada"
        fill
        priority
        className="hidden md:block object-cover object-center"
      />

      {/* 1. Overlay idéntico al del EnvelopeGate para que la imagen se vea igual de viva */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 2. Degradado en la parte inferior para que se funda con el fondo azul de la página al bajar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050e24]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <p
          className={`mb-4 text-sm uppercase tracking-[0.4em] text-dorado transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Mis XV Años
        </p>

        <h1
          className={`font-script text-6xl md:text-8xl lg:text-9xl text-dorado drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Jade Isabella
        </h1>

        <div
          className={`my-8 flex items-center gap-4 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="h-px w-12 bg-dorado/70" />
          <span className="text-lg tracking-widest text-white drop-shadow-md">
            28 · 11 · 2026
          </span>
          <span className="h-px w-12 bg-dorado/70" />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-dorado/80 drop-shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}