import Artistic from "@/components/Artistic";
import BustingSleep from "@/components/BustingSleep";
import CelebratingHandcraft from "@/components/CelebratingHandcraft";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductDisplay from "@/components/ProductDisplay";
import SleepSpace from "@/components/SleepSpace";
import SpaciousStorage from "@/components/SpaciousStorage";
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
      <CelebratingHandcraft />
      <SpaciousStorage />
    </main>
  );
}
