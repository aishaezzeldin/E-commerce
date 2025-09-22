import Link from "next/link";
import { GetAllAddresses } from "./GetAll.actions";
import { AddressResponse } from "@/app/_Types/addressType";
import DelBtnAddress from "../DeleteAddress/DeleteAddBtn";

export default async function AddressPage() {
  const allAddresses = await GetAllAddresses();
  const addresses = allAddresses?.data || [];


  return (
    
    <div className="w-1/2 h-screen mx-auto py-10">
      <h5 className="text-center text-4xl text-green-800">Delivery Details</h5>
    

      {addresses.length > 0 ? (
        <div className="mt-6 space-y-4">
          <h2 className="text-center text-xl font-semibold text-gray-700">
            Saved Addresses
          </h2>

          {addresses.map((addr: AddressResponse) => (
            <div
              key={addr._id}
              className="border p-4 rounded shadow bg-gray-50 hover:bg-gray-100 transition"
            >
              <p><strong>Name:</strong> {addr.name}</p>
              <p><strong>City:</strong> {addr.city}</p>
              <p><strong>Details:</strong> {addr.details}</p>
              <p><strong>Phone:</strong> {addr.phone}</p>

              {/* Link to GetSpecificAddress/[id] */}
              <Link
                href={`./GetSpacificAddress/${addr._id}`}
                className="text-blue-600 underline text-sm"
              >
                View Full Address
              </Link>

           <DelBtnAddress id={addr._id}/>


            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 pt-4">
          No saved addresses yet
        </p>
      )}

      {/* <div className="max-w-sm mx-auto my-7">
        <AddressForm />
      </div> */}
    </div>
  );
}



