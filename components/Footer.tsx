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
    <footer className="bg-[#050e24] py-16 px-6 text-center text-white">
      <p className="font-serif text-3xl md:text-4xl text-dorado drop-shadow-sm">
        {EVENT.nombre}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">
        Mis XV Años
      </p>

      <div className="mx-auto my-8 h-px w-24 bg-white/20" />

      <p className="text-sm text-white/70">
        Con cariño, esperamos compartir este día contigo.
      </p>

      {/* Créditos y Logo */}
      <div className="mt-8 flex flex-col items-center justify-center">
        <p className="text-xs text-white/40">
          © {year} · DiamondCode
        </p>

        <a
          href="https://diamondcode.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block opacity-80 transition hover:opacity-100"
          aria-label="DiamondCode"
        >
          <Image
            src="/images/diamondcode-logo.png"
            alt="DiamondCode"
            width={80}
            height={24}
            // Si tu logo es oscuro, descomenta el invert para que se vea blanco:
            // className="h-5 w-auto invert"
            className="h-5 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}