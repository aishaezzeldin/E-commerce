import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { getAllCategories } from './category.actions';

export default async function CategoryCard() {

    const AllCategories = await getAllCategories();
    

  return (
    <>
    
          <div className=" gap-6 grid grid-cols-3 cursor-pointer px-10">
              {AllCategories?.map((category) => (
                <Link href={`../subcategories/${category._id}`}
                  className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
                  key={category._id}
                >
             
                  <div className="w-full h-80 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="text-center text-green-800 font-bold text-2xl py-6">
                      {category.name}
                    </h1>
                  </div>
                </Link>
              ))}
        </div>
    </>
  )
}



    {/* <div className=" gap-6 grid grid-cols-3 cursor-pointer px-10">
              {AllCategories?.map((category) => (
                <div
                  className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
                  key={category._id}
                >
             
                  <div className="w-full h-80 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="text-center text-green-800 font-bold text-2xl py-6">
                      {category.name}
                    </h1>
                  </div>
                </div>
              ))}
        </div> */}