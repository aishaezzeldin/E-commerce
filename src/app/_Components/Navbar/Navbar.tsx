// "use client"
// import Image from 'next/image'
// import Link from 'next/link'
// import logo from '../../../../public/images/freshcart-logo.svg'
// import { useSession } from 'next-auth/react'
// import DropBtn from '../DropBtn/DropBtn'
// import { usePathname } from 'next/navigation'

// export default function Navbar() {
//   const { status } = useSession();
//   const pathname = usePathname();

//   const isActive = (path: string) =>
//     pathname === path
//       ? "text-green-700 dark:text-green-500 font-semibold"
//       : "text-gray-900 hover:text-green-700 dark:text-white dark:hover:text-green-500";

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <Image src={logo} alt="Fresh Cart Logo" />
//         </Link>

//         {/* Mobile button */}
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
//             focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
//             dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>

//         {/* Nav links */}
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
//             bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
//             md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
//           >
//             <li>
//               <Link href="/" className={` ${isActive("/")}`}>
//                 Home
//               </Link>
//             </li>

//             {status === "unauthenticated" && (
//               <>
//                 <li>
//                   <Link href="/login" className={` ${isActive("/login")}`}>
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/register" className={`${isActive("/register")}`}>
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}

//             {status === "authenticated" && (
//               <>
//                 <li>
//                   <Link href="/wishlist" className={` ${isActive("/wishlist")}`}>
//                     Wishlist
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/categories" className={`${isActive("/categories")}`}>
//                     Categories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/products" className={`${isActive("/products")}`}>
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/brands" className={`${isActive("/brands")}`}>
//                     Brands
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/cart" className={`${isActive("/cart")}`}>
//                     Cart
//                   </Link>
//                 </li>
//                 <li>
//                 <DropBtn  />
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/images/freshcart-logo.svg'
import { useSession } from 'next-auth/react'
import DropBtn from '../DropBtn/DropBtn'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const { status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-green-700 dark:text-green-500 font-semibold"
      : "text-gray-900 hover:text-green-700 dark:text-white dark:hover:text-green-500";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="Fresh Cart Logo" />
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
            bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
            md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <Link href="/" className={` ${isActive("/")}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            {status === "unauthenticated" && (
              <>
                <li>
                  <Link href="/login" className={` ${isActive("/login")}`} onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className={`${isActive("/register")}`} onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </li>
              </>
            )}

            {status === "authenticated" && (
              <>
                <li>
                  <Link href="/wishlist" className={` ${isActive("/wishlist")}`} onClick={() => setIsOpen(false)}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className={`${isActive("/categories")}`} onClick={() => setIsOpen(false)}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={`${isActive("/products")}`} onClick={() => setIsOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className={`${isActive("/brands")}`} onClick={() => setIsOpen(false)}>
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className={`${isActive("/cart")}`} onClick={() => setIsOpen(false)}>
                    Cart
                  </Link>
                </li>
                <li>
                  <DropBtn />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

