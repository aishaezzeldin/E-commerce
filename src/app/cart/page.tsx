import { CartProduct } from "@/app/_Types/cart";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import DelAllBtn from "./DelAllBtnCart";
import DelBtnCart from "./DelBtnCart";
import { getUserCart } from "./cart.actions";
import CheckOutBtn from "./CheckOutBtn";

export default async function CartPage() {
  const cartItems = await getUserCart();
  

  if (!cartItems || !cartItems.products || cartItems.products.length === 0) {
  return(
     <div className="p-10 text-center font-bold text-4xl"> 
      Your Cart Is Empty
      <FontAwesomeIcon icon={faCartShopping} className='h-10 w-10 inline-block align-middle '/> 
     </div>

  )
}

  return (
    <>

  <div className="flex flex-col lg:flex-row items-center gap-6 p-4">

    {/* main cart */}
    <div className="w-full lg:w-2/3 h-auto lg:h-screen p-6 ">
      <h5 className="inline-block py-4 px-2 font-bold text-2xl md:text-3xl lg:text-4xl align-middle">
        Shopping Cart
        <FontAwesomeIcon
          icon={faCartShopping}
          className="h-8 w-8 md:h-10 md:w-10 inline-block text-green-600 align-middle ml-2"
        />
      </h5>

      <hr className="border-t-2 border-gray-400 my-4" />

      <div className="space-y-4">
        {cartItems.products.map((item: CartProduct) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center md:items-start border-2 border-green-300 rounded-md justify-between p-4 gap-4"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
              <Image
                src={item.product.imageCover}
                alt={item.product.title}
                width={200}
                height={200}
                className="rounded-md object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.product.title}</h3>
                <h2 className="text-sm text-gray-600">
                  <span>by</span> {item.product.brand.name}
                </h2>
                <p className="text-sm">{item.product.description}</p>

                <p className="text-sm text-gray-600">
                  quantity: {item.count} × {item.price} EGP
                </p>

                {/* <Button className="my-3 cursor-pointer bg-green-300 hover:bg-green-500">
                  <FontAwesomeIcon icon={faTrash} className="w-5 h-5 mr-2" />
                  remove
                </Button> */}
                <DelBtnCart id={item.product.id}/>

              </div>
            </div>

            <p className="font-bold text-center md:text-right w-full md:w-auto">
              price : {item.price * item.count} EGP
            {/* <PriceHandler  price={item.product.price * item.count} priceAfterDiscount={item.product.priceAfterDiscount * item.count} /> */}

            </p>
            {/* <PriceHandler  price={item.product.price * item.count} priceAfterDiscount={item.product.priceAfterDiscount * item.count} /> */}

          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-400 mt-8" />


      <div className="flex mt-6 justify-between items-center ">

        {/* <div>
        <Button className="px-4">
          Clear Cart 
        </Button>
      </div> */}
      <DelAllBtn />

      <div className="mt-6 text-right font-bold text-lg">
        Total: {cartItems.totalCartPrice} EGP
      </div>

      </div>

    </div>


    {/* total cart */}

    <div className="w-full lg:w-1/3 h-auto border-2 border-green-300 rounded-md p-4">
      <div className="flex justify-between">
        <h3>Sub total</h3>
        <h3>{cartItems.totalCartPrice} EGP</h3>
      </div>
      <div className="flex justify-between mt-2">
        <h3>Delivery fees</h3>
        <h3>250 EGP</h3>
      </div>
      <hr className="border-t-2 border-gray-400 my-4" />

      <div className="flex justify-between text-2xl font-bold">
        <h3>Total</h3>
        <h3>{cartItems.totalCartPrice + 250} EGP</h3>
      </div>

      {/* check out btn  */}

        {/* <DrawerExample/> */}


       {/* <Button className="block w-full md:w-2/3 mx-auto my-6 cursor-pointer">
        COMPLETE ORDER
      </Button>  */}

      <CheckOutBtn/>


 


    
    </div>
  </div>

    </>

  );
}







































/** 
  * 
  * 
  * finalres {
  status: 'success',
  numOfCartItems: 0,
  data: { products: [], totalCartPrice: 0 }
  */

  /**
  finalres {
  status: 'success',
  message: 'Product added successfully to your cart',
  numOfCartItems: 3,
  cartId: '68cc400dc763e5886654e890',
  data: {
    _id: '68cc400dc763e5886654e890',
    cartOwner: '68cb26dfc763e588664570ed',
    products: [ [Object], [Object], [Object] ],
    createdAt: '2025-09-18T17:23:25.730Z',
    updatedAt: '2025-09-18T17:26:10.510Z',
    __v: 2,
    totalCartPrice: 745
  }

   */