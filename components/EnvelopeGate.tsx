"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { EVENT } from "@/lib/constants";
import BackgroundMusic from "./Backgroundmusic";

export default function EnvelopeGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [abierto, setAbierto] = useState(false);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    setMontado(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <>
      <div
        className={`transition-opacity duration-1000 ${
          abierto ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!abierto}
      >
        {abierto && <BackgroundMusic />}
        {children}
      </div>

      {montado && !abierto && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050e24]">
          
          {/* FONDO RESPONSIVE (Celular) */}
          <Image
            src="/images/fondocarta.png"
            alt="La noche estrellada"
            fill
            priority
            className="object-cover object-center md:hidden"
          />

          {/* FONDO RESPONSIVE (Computadora) */}
          <Image
            src="/images/fondocarta2.png"
            alt="La noche estrellada"
            fill
            priority
            className="hidden md:block object-cover object-center"
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENIDO CENTRAL */}
          <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-lg">
            
            {/* Texto arriba */}
            <div className="mb-10 flex flex-col items-center text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-dorado/90 drop-shadow-md">
                Mis XV Años
              </p>
              <h1 className="mt-2 font-script text-5xl md:text-6xl text-dorado drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                {EVENT.nombre}
              </h1>
              <div className="mt-4 h-px w-16 bg-dorado/60" />
            </div>

            {/* EL SOBRE */}
            {/* En escritorio, le damos un poco más de tamaño para que se aprecie bien */}
            <div className="scale-100 md:scale-125 transition-transform duration-500">
              <Envelope 
                onOpen={() => {
                  setAbierto(true);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }} 
              />
            </div>

            {/* Texto abajo */}
            <p className="mt-16 md:mt-24 text-[11px] uppercase tracking-[0.4em] text-white/80 drop-shadow-md animate-pulse">
              Presionar para abrir
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1500); 
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer select-none group"
    >
      <div
        className={`relative h-64 w-[340px] md:h-72 md:w-[400px] transition-all duration-1000 ease-in-out origin-center ${
          opening ? "scale-[2] opacity-0" : "scale-100 opacity-100 group-hover:scale-105"
        }`}
      >
        <div className="absolute inset-0 rounded-md drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]" />
        <div className="absolute inset-0 overflow-hidden rounded-md bg-gradient-to-br from-[#1a2f5a] to-[#0d1b38] shadow-inner z-10">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/20 to-transparent [clip-path:polygon(0_0,100%_50%,0_100%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/20 to-transparent [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/30 to-transparent [clip-path:polygon(0_100%,50%_0,100%_100%)]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-36 w-full z-20 origin-top transition-transform duration-700 group-hover:-rotate-x-12">
          <div className="relative w-full h-full bg-gradient-to-b from-[#1e3a6b] to-[#13264d] [clip-path:polygon(0_0,100%_0,50%_100%)] shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
          </div>
        </div>
        <div
          className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_6px_15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-110"
          style={{
            background: "radial-gradient(circle at 30% 30%, #fdf0b0, #d4af37 40%, #a67c1a 80%, #6b4c0a)",
            border: "2px solid #b8942e",
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.4), 0 8px 15px rgba(0,0,0,0.6)"
          }}
        >
          <span className="font-serif text-2xl font-bold text-[#4a3104] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            15
          </span>
          <div className="absolute top-1 left-2 h-3 w-4 rounded-full bg-white/30 blur-[2px] transform -rotate-45" />
        </div>
      </div>
    </div>
  );
}