import Image from "next/image";
import { Inter } from "next/font/google";
import TravelCard from "../components/TravelCard";
import header from "./header";
import Navbar from "@/components/Navbar";
import TravelMain from "../components/TravelMain";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      
      <header title="Rajgir-Travel" />
      <Navbar />
      <TravelMain />
    </div>
  );
}
