"use client";

import { useRef, useState, useEffect } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Empezamos asumiendo que la música va a sonar
  const [isPlaying, setIsPlaying] = useState(true); 

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Intentamos reproducir inmediatamente al montar el componente (justo cuando el sobre se abre)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Si el navegador lo bloquea, escuchamos el primer clic en la pantalla para arrancar
          setIsPlaying(false);
          const playOnClick = () => {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
            document.removeEventListener("click", playOnClick);
          };
          document.addEventListener("click", playOnClick);
        });
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    // Evitamos que el clic en el botón de mute se propague a otros elementos (como el sobre)
    e.stopPropagation(); 

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/suzume.mp4" loop />
      
      {/* Botón flotante (Estilo temático noche estrellada) */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-dorado/50 bg-[#050e24]/80 text-dorado shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-dorado hover:text-[#050e24]"
        aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
      >
        {isPlaying ? (
          // Icono de bocina con sonido (cuando suena)
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        ) : (
          // Icono de bocina muteada (cuando está en silencio)
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        )}
      </button>
    </>
  );
}