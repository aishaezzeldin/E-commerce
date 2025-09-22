import React from 'react'
import { GetSpecificAddress } from '../GetSpec.actions'
import { propsType } from '@/app/_Types/propsType'

export default async function getspacaddress({params}:propsType) {

  const { id } = params;
  const specificAdd = await GetSpecificAddress(id);

  if (!specificAdd || !specificAdd.data) {
    return <p>No address found</p>;
  }

  const { name, details, phone, city } = specificAdd.data;

  return (
    <div className="w-1/2 mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Saved Address</h2>
      <div className="border p-4 rounded shadow">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Details:</strong> {details}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}