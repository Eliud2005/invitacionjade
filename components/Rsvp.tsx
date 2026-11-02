"use client";

import { useState } from "react";
import { EVENT } from "@/lib/constants";

export default function Rsvp() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("1");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `¡Hola! Confirmo mi asistencia a los XV de ${EVENT.nombre}.\n\n` +
        `Nombre: ${nombre}\n` +
        `Personas: ${personas}\n` +
        (mensaje ? `Mensaje: ${mensaje}` : "")
    );
    window.open(`https://wa.me/${EVENT.whatsapp}?text=${texto}`, "_blank");
  };

  return (
    // Se quitó el bg-white
    <section id="rsvp" className="py-20 px-6">
      <div className="mx-auto max-w-lg text-center">
        
        <h2 className="mb-4 font-serif text-3xl md:text-5xl text-dorado drop-shadow-md">
          Confirma tu asistencia
        </h2>
        <p className="mb-10 text-white/70">
          Tu presencia es muy importante. Por favor confirma antes del 20 de noviembre.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-dorado/90">
              Nombre
            </label>
            <input
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              // Inputs con fondo transparente, borde sutil y texto blanco
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition focus:border-dorado focus:outline-none focus:ring-1 focus:ring-dorado"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-dorado/90">
              Número de personas
            </label>
            <select
              value={personas}
              onChange={(e) => setPersonas(e.target.value)}
              // El select también lleva el estilo de cristal. Ojo: las opciones (options) en algunos navegadores móviles toman el color del sistema, pero el fondo del select sí se ve oscuro.
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition focus:border-dorado focus:outline-none focus:ring-1 focus:ring-dorado [&>option]:text-black"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "persona" : "personas"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-dorado/90">
              Mensaje (opcional)
            </label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition focus:border-dorado focus:outline-none focus:ring-1 focus:ring-dorado"
              placeholder="Un mensaje para la quinceañera..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-dorado px-8 py-4 text-sm font-bold uppercase tracking-widest text-azul-rey transition-all duration-300 hover:bg-[#e6c25c] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Confirmar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}