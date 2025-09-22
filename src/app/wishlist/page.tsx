import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DelBtnWishlist from "./DelBtnWishlist";
import AddBtnCart from "../cart/AddBtnCart";
import { getUserWishlist } from "./wishlist.actions";

export default async function wishlist() {

  const wishItems  = await   getUserWishlist();

    if (!wishItems?.length ) {
  return(
     <div className="p-10 text-center font-bold text-4xl"> 
      Your Wish List Is Empty
      <FontAwesomeIcon icon={faCartShopping} className='h-10 w-10 inline-block align-middle '/> 
     </div>

  )
}

  // console.log("wishlist items:", wishItems);

  
//   console.log("res",res)


  return (

    <>
    <div>
          {/* main cart */}
    <div className="w-full m-auto lg:w-2/3 h-auto lg:h-screen p-6 ">
      <h5 className="inline-block py-4 px-2 font-bold text-2xl md:text-3xl lg:text-4xl align-middle">
        My Wishlist
        {/* <FontAwesomeIcon
          icon={faCartShopping}
          className="h-8 w-8 md:h-10 md:w-10 inline-block text-green-600 align-middle ml-2"
        /> */}
      </h5>

      <hr className="border-t-2 border-gray-400 my-4" />

      <div className="space-y-4">
        {wishItems?.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:items-start border-2 border-green-300 rounded-md  justify-between p-4 gap-4"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
              <Image
                src={item.imageCover}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-md object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
                <h2 className="text-sm text-gray-600">
                  <span>by</span> {item.brand.name}
                </h2>
                <p className="font-bold text-center md:text-right w-full md:w-auto">
                    price : {item.price} EGP
                </p>

                {/* <DelBtn id={item.id}/> */}
            <DelBtnWishlist id={item._id}/>


              </div>
            </div>


            <div className="">
                <AddBtnCart id={item._id}/>

            </div>

          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-400 mt-8" />

{/* 
      <div className="flex mt-6 justify-between items-center ">

        <div>
        <Button className="px-4">
          Clear Wishlist 
        </Button>
      </div>

      </div> */}

    </div>

    </div>
    
     </>
                 
  )
}


// res [
//   {
//     sold: 3.0643459779910765e+303,
//     images: [
//       '1680403156555-3.jpeg',
//       '1680403156555-2.jpeg',
//       '1680403156554-1.jpeg',
//       '1680403156556-4.jpeg'
//     ],
//     subcategory: [ [Object] ],
//     ratingsQuantity: 18,
//     _id: '6428ead5dc1175abc65ca0ad',
//     title: 'Woman Shawl',
//     slug: 'woman-shawl',
//     description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
//     quantity: 220,
//     price: 149,
//     imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
//     category: {
//       _id: '6439d58a0049ad0b52b9003f',
//       name: "Women's Fashion",
//       slug: "women's-fashion",
//       image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
//     },
//     brand: {
//       _id: '64089bbe24b25627a253158b',
//       name: 'DeFacto',
//       slug: 'defacto',
//       image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
//     },
//     ratingsAverage: 4.8,
//     createdAt: '2023-04-02T02:39:17.204Z',
//     updatedAt: '2025-09-19T19:36:17.570Z',
//     __v: 0,
//     id: '6428ead5dc1175abc65ca0ad'
//   }
// ]