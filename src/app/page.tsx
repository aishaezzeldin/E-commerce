import ProductCard from "./_Components/ProductCard/ProductCard";
import CatSwiper from "./_Components/Swiper/CatSwiper";
import HandleCatSwiper from "./_Components/Swiper/HandleCatSwiper";
import MainSwiper from "./_Components/Swiper/MainSwiper";

 export  default async function Home() {


  return (
    <>

    <div className="w-10/12 m-auto ">

     <MainSwiper/>
     <HandleCatSwiper/>

    <ProductCard/>

    </div>

   

    </>


  )
}
