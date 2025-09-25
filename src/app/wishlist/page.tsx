import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <>
    <div>
          {/* main cart */}
    <div className="w-full m-auto lg:w-2/3 h-auto bg-gray-100  p-6 ">
      <h5 className="inline-block py-4 px-2 font-bold text-2xl md:text-3xl lg:text-4xl align-middle">
        My Wishlist
        <FontAwesomeIcon
          icon={faHeart}
          className="h-8 w-8 md:h-10 md:w-10 inline-block text-green-600 align-middle ml-2"
        />
      </h5>

      <hr className="border-t-2 border-gray-200 my-4" />

      <div className="space-y-4 ">
        {wishItems?.map(item => (

          <div
  key={item.id}
  className="border-2 border-gray-500 p-3 shadow-sm flex flex-col justify-between"
>
  {/* Image */}
  <div className="flex flex-col md:flex-row items-center md:items-start rounded-md  justify-between p-4 gap-4">
     <Image
        src={item.imageCover}
        alt={item.title}
        width={200}
        height={200}
        className="rounded-md object-cover"
      />

  {/* Content */}
  <div className="flex-1 mt-3">
    <h3 className="text-green-600 font-semibold">{item.title}</h3>
    <p className="text-sm text-gray-600">{item.brand?.name}</p>
    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
    <p className="mt-2 text-lg font-bold text-green-700">
      EGP {item.price}
    </p>
  </div>

  </div>
 

  {/* Actions */}
  <div className="mt-3 flex justify-end  items-center">
    <DelBtnWishlist id={item._id}/>


    <div className="ps-6 mb-3">
    <AddBtnCart  id={item._id}/>
    </div>

  </div>
</div>

        ))}
      </div>

    </div>

    </div>
    
    </>
  )
}
