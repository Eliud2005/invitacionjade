import { cacheLife } from "next/cache";
import Image from "next/image";
import { EVENT } from "@/lib/constants";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="relative overflow-hidden min-h-[450px] flex flex-col justify-center px-6 text-center text-white">
      
      {/* 👇 IMAGEN DE FONDO (Sin zoom excesivo) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondocarta.png"
          alt="La noche estrellada"
          fill
          // object-bottom ancla las nubes abajo. Leve zoom para que llene bien.
          className="object-cover object-bottom scale-110"
        />
        
        {/* 👇 EL TRUCO PARA VER LAS ESTRELLAS: 
            El azul sólido se queda solo arriba (para empalmar con el RSVP) 
            y la parte de abajo se vuelve casi transparente para dejar ver la pintura */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050e24] via-[#050e24]/50 to-transparent" />
      </div>

      <div className="relative z-10 mt-8">
        <p className="font-serif text-3xl md:text-5xl text-dorado drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {EVENT.nombre}
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/80 drop-shadow-md">
          Mis XV Años
        </p>

        <div className="mx-auto my-6 h-px w-24 bg-dorado/50" />

        <p className="text-sm text-white/90 drop-shadow-md">
          Con cariño, esperamos compartir este día contigo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center">
          <p className="text-xs text-white/60 drop-shadow-sm">
            © {year} · DiamondCode
          </p>

          <a
            href="https://diamondcode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block opacity-90 transition hover:opacity-100"
            aria-label="DiamondCode"
          >
            <Image
              src="/images/diamondcode-logo.png"
              alt="DiamondCode"
              width={80}
              height={24}
              className="h-5 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}