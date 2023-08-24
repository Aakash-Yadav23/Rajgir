import Image from "next/image";
import { Inter } from "next/font/google";
import TravelCard from "../components/TravelCard";
import header from "./header";
import Navbar from "@/components/Navbar";
import TravelMain from "../components/TravelMain";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <Head>
        <title>Rajgir</title>
      </Head>
      <Navbar />
      <TravelMain />
    </div>
  );
}
