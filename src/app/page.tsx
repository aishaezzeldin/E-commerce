import ProductCard from "./_Components/ProductCard/ProductCard";
import MainSwiper from "./_Components/Swiper/MainSwiper";

 export  default async function Home() {


  return (
    <>

    <div className="w-10/12 m-auto">

     <MainSwiper/>

    <ProductCard/>

    </div>

   

    </>


  )
}
