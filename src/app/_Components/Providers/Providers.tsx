"use client";

import { Toaster } from "@/components/ui/sonner";
import MysessionProvider from "../MysessionProvider/MysessionProvider";
import Navbar from "../Navbar/Navbar";
import CartContextProvider from "@/app/_Context/CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MysessionProvider>
      <Navbar />
      {children}
      <Toaster />
    </MysessionProvider>
  );
}
