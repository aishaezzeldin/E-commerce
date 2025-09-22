import Image from 'next/image';
import { getAllBrands } from './brands.actions';

export default async function Brands() {
  const AllBrands = await getAllBrands();

  return (
    <div className="m-9">
      <h5 className="text-center text-6xl text-green-500 py-5">All Brands</h5>
      <div className="grid grid-cols-4">
        {AllBrands?.map((brand) => (
          <div
            key={brand._id}
            className="gap-6 border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
          >
            <Image
              className="w-full"
              width={200}
              height={200}
              src={brand.image}
              alt={brand.name}
            />
            <h1 className="text-center">{brand.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
