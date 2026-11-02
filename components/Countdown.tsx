"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/constants";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft(EVENT.fecha));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Días", value: time?.days ?? "--" },
    { label: "Horas", value: time?.hours ?? "--" },
    { label: "Min", value: time?.minutes ?? "--" },
    { label: "Seg", value: time?.seconds ?? "--" },
  ];

  return (
    <section id="countdown" className="py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        
        <p className="mb-2 text-xs uppercase tracking-[0.4em] text-dorado/80">
          Faltan
        </p>
        <h2 className="mb-12 font-serif text-3xl md:text-5xl text-dorado drop-shadow-md">
          Para el gran día
        </h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md md:py-6"
            >
              {/* Cambiamos font-serif por font-sans, agregamos font-light y tabular-nums */}
              <span className="block font-sans text-4xl font-light tracking-tight tabular-nums text-dorado drop-shadow-md md:text-5xl lg:text-6xl">
                {typeof item.value === "number"
                  ? String(item.value).padStart(2, "0")
                  : item.value}
              </span>
              
              <span className="mt-2 block text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}