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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src="/images/budha-1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <header title="Rajgir-Travel" />
      <Navbar />
      <TravelMain />
    </div>
  );
}
