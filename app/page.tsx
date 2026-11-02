import EnvelopeGate from "@/components/EnvelopeGate";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Location from "@/components/Location";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import EventDetails from "@/components/Eventdetails";

export default function Home() {
  return (
    <EnvelopeGate>
      <main className="bg-[#050e24] text-white">
        <Hero />
        <Countdown />
        <EventDetails />
        <Rsvp />
        <Footer />
      </main>
    </EnvelopeGate>
  );
}