"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DropBtn() {
   const router = useRouter()
  const { data: session } = useSession();

  const firstName = session?.user?.name
    ? session.user.name.split(" ")[0]
    : "Guest";
  
  return (
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button >
            Hi, {firstName}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>router.push('/GetAllAddresses')}>
            Saved Addresses        
          </DropdownMenuItem  >
          <DropdownMenuItem onClick={()=>router.push('/AddAddress')}>
            Add New Address
        </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>router.push('/allorders')}>
            Your Orders
            </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>(signOut(),router.push('/login'))
          }>
            Log Out
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

