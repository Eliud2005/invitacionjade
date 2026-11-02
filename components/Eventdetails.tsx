import { EVENT } from "@/lib/constants";

export default function EventDetails() {
  const { recepcion } = EVENT;

  return (
    <section id="evento" className="py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        
        {/* Título principal */}
        <h2 className="mb-12 font-serif text-3xl md:text-5xl text-dorado drop-shadow-md">
          Recepción
        </h2>

        {/* Tarjeta con los datos y el mapa */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl backdrop-blur-md">
          
          <h3 className="mb-2 font-serif text-3xl text-dorado drop-shadow-sm">
            {recepcion.lugar}
          </h3>
          <p className="text-lg text-white/80">{recepcion.direccion}</p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white">
            {recepcion.hora}
          </p>

          {/* Mapa integrado */}
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 shadow-inner">
            <iframe
              // ⚠️ RECUERDA: Cambia este src por el enlace real de "Insertar mapa" de Google Maps
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.564456789!2d-96.724!3d-16.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU4JzQ4LjAiTiA5NsKwNDMnMjYuNCJX!5e0!3m2!1ses!2smx!4v1600000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del evento"
            />
          </div>
          
          <a
            href={recepcion.mapa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-dorado bg-dorado/10 px-8 py-3 text-sm uppercase tracking-widest text-dorado transition-all duration-300 hover:bg-dorado hover:text-azul-rey hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]"
          >
            Abrir en Google Maps
          </a>
        </div>

        {/* Sección de Padres y Padrinos */}
        <div className="mt-16 space-y-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dorado/70">Padres</p>
            <p className="mt-2 text-lg text-white font-serif">{EVENT.padres}</p>
          </div>
          
          <div className="mx-auto h-px w-12 bg-dorado/30" />

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-dorado/70">Padrinos</p>
            <p className="mt-2 text-lg text-white font-serif">{EVENT.padrinos}</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}