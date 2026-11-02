import { EVENT } from "@/lib/constants";

export default function Location() {
  return (
    // Fondo transparente (se quita el bg-neutral-50)
    <section id="ubicacion" className="py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        
        <h2 className="mb-4 font-serif text-3xl md:text-5xl text-dorado drop-shadow-md">
          Ubicación
        </h2>
        <p className="mb-10 text-lg text-white/80">
          {EVENT.recepcion.lugar}
        </p>

        {/* Contenedor del mapa con efecto cristal */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
          {/* Nota: Cambié la URL del iframe a embed porque la que tenías (maps.app.goo.gl) no funciona en iframes, solo como link directo */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.564456789!2d-96.724!3d-16.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU4JzQ4LjAiTiA5NsKwNDMnMjYuNCJX!5e0!3m2!1ses!2smx!4v1600000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del evento"
            className="rounded-xl"
          />
        </div>

        {/* Botón dorado */}
        <a
          href={EVENT.recepcion.mapa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full border border-dorado bg-dorado/10 px-8 py-3 text-sm uppercase tracking-widest text-dorado transition-all duration-300 hover:bg-dorado hover:text-azul-rey hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}