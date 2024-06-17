import OurExpertise from "@/components/OurExpertise";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <Hero />
      <OurExpertise />
    </main>
  );
}
