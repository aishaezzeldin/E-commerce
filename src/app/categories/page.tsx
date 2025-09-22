
import CategoryCard from '../_Components/CategoryCard/CategoryCard';

export default async function categories() {
        
return (

    <div className='m-9'>
        <h5 className='text-center text-6xl  text-green-500 py-5 '>Our Categories</h5>
        <CategoryCard/>
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
    </div>
  )
}



// return (

//     <div className='m-9'>
//         <h5 className='text-center text-6xl  text-green-500 py-5 '>Our Categories</h5>
//     <div className='grid grid-cols-3 '>


//         {AllCategories?.map(category =>
//          <div className="gap-6 border  transition-transform duration-300 hover:scale-105 hover:shadow hover:shadow-green-600 border-gray-400 rounded-md m-3" key={category._id}>
//             <div className="w-full h-80 overflow-hidden"> 
//               <Image
//                 className="w-full h-full object-cover"
//                 width={500}
//                 height={500}
//                 src={category.image}
//                 alt={category.name}
//               />
//             </div>
//             <div className='flex justify-center items-center'>
//             <h1 className="text-center text-green-800 font-bold text-2xl  py-6">{category.name}</h1>


//             </div>
//           </div>
 

          
       



//         )}

//     </div>

//     </div>
//   )