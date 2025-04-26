import Artistic from "@/components/Artistic";
import BustingSleep from "@/components/BustingSleep";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductDisplay from "@/components/ProductDisplay";
import SleepSpace from "@/components/SleepSpace";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <ProductDisplay />
      <Artistic />
      <BustingSleep />
      <SleepSpace />
    </main>
  );
}
