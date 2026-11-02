"use client";
import { useRef, useState, useEffect } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Intenta reproducir al hacer clic en el sobre (o en cualquier parte)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Los navegadores bloquean el autoplay. 
    // La mejor estrategia es iniciar la música cuando el usuario interactúa (ej. al abrir el sobre).
    const playAudio = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Si falla, se activará con el botón flotante
      });
    };

    // Escucha el primer clic en el documento para intentar reproducir
    document.addEventListener('click', playAudio, { once: true });

    return () => document.removeEventListener('click', playAudio);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/suzume.mp3" loop />
      
      {/* Botón flotante para control manual */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur transition hover:bg-white"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? "🔇" : "🎵"}
      </button>
    </>
  );
}