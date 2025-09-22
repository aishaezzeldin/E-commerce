import { propsType } from '@/app/_Types/propsType';
import React from 'react'
import { getAllSubCategories } from '../subcategory.actions';

export default async function SubcategoryPage(props:propsType) {

    const Selectedsubcat = await getAllSubCategories(props.params.id);
  return (

    <>
     <div className=" gap-6 grid grid-cols-3 cursor-pointer py-10">
                {Selectedsubcat?.map((sub) => (
                <div 
                    className="border transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3"
                    key={sub._id}
                >
                    <div className="flex justify-center items-center">
                    <h1 className="text-center text-green-800 font-bold text-2xl ">
                        {sub.name}
                    </h1>
                    </div>
                </div>
                ))}
            </div>    
     </>
  )
}
