"use client";
import { useState } from "react";

export default function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                     focus:ring-blue-300 font-medium rounded-lg text-sm 
                     px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                     focus:outline-none dark:focus:ring-blue-800"
        >
        COMPLETE ORDER
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto 
                    transition-transform bg-white w-80 dark:bg-gray-800
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>


        <div className="grid grid-cols-2 gap-4">
          <a
            href="../(Auth)/login"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white 
                       border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 
                       hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                       dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                       dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login
          </a>

          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center 
                       text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                       focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                       focus:outline-none dark:focus:ring-blue-800"
          >
            Get access
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}























// "use client";
// import { useState } from "react";
// import LoginForm from "../(Auth)/login/loginForm";
// import RegisterForm from "../(Auth)/register/RegisterForm";

// export default function AuthDrawer() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [view, setView] = useState<"login" | "register">("login");

//   return (
//     <div>
//       {/* Buttons */}
//       <div className="flex gap-4 justify-center">
//         <button
//           onClick={() => {
//             setView("login");
//             setIsOpen(true);
//           }}
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
//                      focus:ring-blue-300 font-medium rounded-lg text-sm 
//                      px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 
//                      focus:outline-none dark:focus:ring-blue-800"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => {
//             setView("register");
//             setIsOpen(true);
//           }}
//           className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 
//                      focus:ring-green-300 font-medium rounded-lg text-sm 
//                      px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 
//                      focus:outline-none dark:focus:ring-green-800"
//         >
//           Register
//         </button>
//       </div>

//       {/* Drawer */}
//       <div
//         className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto 
//                     transition-transform bg-white w-96 dark:bg-gray-800 shadow-lg
//                     ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={() => setIsOpen(false)}
//           className="text-gray-400 bg-transparent hover:bg-gray-200 
//                      hover:text-gray-900 rounded-lg text-sm w-8 h-8 
//                      absolute top-3 right-3 inline-flex items-center 
//                      justify-center dark:hover:bg-gray-600 dark:hover:text-white"
//         >
//           ✕
//         </button>

//         {/* Drawer Title */}
//         <h2 className="mb-6 text-lg font-bold text-gray-800 dark:text-white">
//           {view === "login" ? "Login" : "Register"}
//         </h2>

//         {/* Forms */}
//         {view === "login" ? <LoginForm /> : <RegisterForm />}

//         {/* Switch Link */}
//         <div className="mt-6 text-center text-sm">
//           {view === "login" ? (
//             <p className="text-gray-600 dark:text-gray-400">
//               Don’t have an account?{" "}
//               <button
//                 onClick={() => setView("register")}
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Register here
//               </button>
//             </p>
//           ) : (
//             <p className="text-gray-600 dark:text-gray-400">
//               Already have an account?{" "}
//               <button
//                 onClick={() => setView("login")}
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Login here
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useState } from "react";
// import LoginForm from "../(Auth)/login/loginForm";
// import RegisterForm from "../(Auth)/register/RegisterForm";

// export default function CheckoutDrawer() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [view, setView] = useState<"login" | "register">("login");

//   return (
//     <div>
//       {/* Complete Order Button */}
//       <button
//         onClick={() => {
//           setView("login"); // always start with login
//           setIsOpen(true);
//         }}
//         className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium"
//       >
//         Complete Order
//       </button>

//       {/* Drawer */}
//       <div
//         className={`fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto 
//                     transition-transform bg-white w-96 dark:bg-gray-800 shadow-lg
//                     ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white"
//         >
//           ✕
//         </button>

//         {/* Switch Tabs (Login | Register) */}
//         <div className="flex justify-center gap-4 mb-6">
//           <button
//             onClick={() => setView("login")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               view === "login"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
//             }`}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setView("register")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               view === "register"
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
//             }`}
//           >
//             Register
//           </button>
//         </div>

//         {/* Drawer Content */}
//         {view === "login" ? <LoginForm /> : <RegisterForm />}
//       </div>
//     </div>
//   );
// }











