"use client";

import { Toaster } from "@/components/ui/sonner";
import MysessionProvider from "../MysessionProvider/MysessionProvider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Loading from "@/app/Loading";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MysessionProvider>
      <Navbar />
      {/* <Loading/> */}
      {children}
      <Toaster/>
      <Footer/>

    </MysessionProvider>
  );
}
