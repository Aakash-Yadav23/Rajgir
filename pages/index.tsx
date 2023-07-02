import Image from 'next/image'
import { Inter } from 'next/font/google'
import TravelCard from '../components/TravelCard';
import header from './header';
import Navbar from '../components/Navar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <header title='Rajgir-Travel' />
 <Navbar />
  <TravelCard />
  </>
  )
}
