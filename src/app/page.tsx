import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <Hero />
      <Services />
    </div>
  );
}
