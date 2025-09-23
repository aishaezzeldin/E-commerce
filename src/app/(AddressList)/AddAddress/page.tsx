// import React from 'react'
// import AddressForm from './AddAddressForm'
// import Link from 'next/link'

// export default function addresspage() {
//   return (
//     <>
//   <div className='w-1/2 h-screen mx-auto py-10 '>
//     <h5 className='text-center text-4xl text-green-800'>Delivery Details</h5>

//     <h2 className='text-center text-xl pt-4'> <Link  href={`../GetSpacificAddress/${id}`} className='text-red-600'>Use Saved Address?</Link> </h2>

    
//       <div className="max-w-sm mx-auto my-7">

//         <AddressForm/>
        
//       </div>


//     </div>
//     </>
//   )
    
    

// }

import AddressForm from "./AddAddressForm";
import Link from "next/link";
import { GetAllAddresses } from "../GetAllAddresses/GetAll.actions";
import { Button } from "@/components/ui/button";
// import { GetAllAddresses } from "./AddAddress.actions";

export default async function AddressPage() {
  const allAddresses = await GetAllAddresses();

  // pick the first one
  const firstAddressId = allAddresses?.data?.[0]?._id;

  return (
    <div className="w-1/2 h-screen mx-auto py-10">
      <h5 className="text-center text-4xl text-green-800">Delivery Details</h5>

      {firstAddressId ? (
        <h2 className="text-center text-xl pt-4">
          <Link
            // href={`../GetSpacificAddress/${firstAddressId}`}
            href={`../GetAllAddresses`}
            className="text-red-600"
          >
            Use Saved Address?
          </Link>
        </h2>
      ) : (
        <p className="text-center text-gray-500 pt-4">
          No saved addresses yet
        </p>
      )}

      <div className="max-w-sm mx-auto my-7">
        <AddressForm />
        <Link href={'../cashorder'}>
        <Button> payment </Button>
        </Link>
      </div>
    </div>
  );
}



