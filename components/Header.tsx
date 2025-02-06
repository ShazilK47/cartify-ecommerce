"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { SignedIn } from "@clerk/clerk-react";
import { useBasketStore } from "@/store/store";
import { useState, useEffect } from "react";

// const Header = () => {
//   const { user } = useUser(); //check wether user is available or not

//   const itemCount = useBasketStore((state) =>
//     state.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   const createClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (err) {
//       console.error("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   console.log(user);

//   return (
//     <header className="flex flex-wrap justify-between items-center px-4 py-2">
//       {/* Top row */}
//       <div className="flex w-full flex-wrap justify-between items-center">
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
//         >
//           Cartify
//         </Link>

//         <Form
//           action="/search"
//           className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
//         >
//           <input
//             type="text"
//             name="query"
//             placeholder="Search for products"
//             className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full  max-w-4xl"
//           />
//         </Form>

//         <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
//           <Link
//             href="/basket"
//             className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
//           >
//             <TrolleyIcon className="w-6 h-6" />
//             {/* Span item count once global state is implemented */}
//             <span
//               className={` ${itemCount > 0 ? "absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs" : "hidden"}`}
//             >
//               {itemCount}
//             </span>
//             <span className="sm:text-xs">Cart</span>
//           </Link>

//           {/* User area */}
//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 <PackageIcon className="w-6 h-6 " />
//                 <span className="sm:text-xs">Orders</span>
//               </Link>
//             </SignedIn>
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <UserButton />
//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-400">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}</p>
//                 </div>
//               </div>
//             ) : (
//               <SignInButton mode="modal" />
//             )}

//             {user?.passkeys.length === 0 && (
//               <button
//                 onClick={createClerkPasskey}
//                 className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
//               >
//                 Create passkey
//               </button>
//             )}
//           </ClerkLoaded>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

//________________________________________________________ pracitce _____________________________________________________________

// const Header = () => {
//   const { user } = useUser();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const itemCount = useBasketStore((state) =>
//     state.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   const createClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (err) {
//       console.error("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolling ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
//       }`}
//     >
//       {/* Announcement Bar */}
//       <div className="hidden sm:flex justify-center items-center bg-gray-900 text-white text-sm py-2">
//         <p>
//           🌟 Summer Sale: Up to 50% OFF + Free Express Delivery!{" "}
//           <Link href="/" className="underline font-semibold ml-1">
//             Shop Now
//           </Link>
//         </p>
//       </div>

//       {/* Navbar */}
//       <div className=" hidden md:flex justify-between items-center px-6 md:px-10 py-4 border-b">
//         {/* Logo */}
//         <Link
//           href="/"
//           className=" md:text-2xl font-bold text-gray-800 dark:text-white"
//         >
//           Cartify
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6">
//           {["Home", "About", "Contact"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition font-medium"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* Search Box */}
//         <Form action="/search" className="hidden lg:flex w-full max-w-md">
//           <input
//             type="text"
//             name="query"
//             placeholder="Search for products..."
//             className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg w-full border focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//         </Form>

//         {/* Cart & User Section */}
//         <div className="hidden md:flex items-center space-x-4">
//           {/* Cart */}
//           <Link
//             href="/basket"
//             className="relative flex items-center text-gray-700 dark:text-white"
//           >
//             <TrolleyIcon className="w-7 h-7 text-gray-800 dark:text-white" />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {itemCount}
//               </span>
//             )}
//           </Link>

//           {/* User Section */}
//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center"
//               >
//                 <PackageIcon className="w-5 h-5 mr-2" />
//                 Orders
//               </Link>
//             </SignedIn>
//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <UserButton />
//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-500">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}</p>
//                 </div>
//               </div>
//             ) : (
//               <SignInButton mode="modal" />
//             )}

//             {user?.passkeys.length === 0 && (
//               <button
//                 onClick={createClerkPasskey}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 Create Passkey
//               </button>
//             )}
//           </ClerkLoaded>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex justify-between px-6 py-3 items-center pt-8">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-gray-700 dark:text-white text-2xl z-50"
//         >
//           {!isOpen ? "☰" : "X"}
//         </button>

//         <Link
//           href="/"
//           className="text-2xl font-bold text-gray-800 dark:text-white"
//         >
//           Cartify
//         </Link>

//         <Link href="/basket" className="relative">
//           <TrolleyIcon className="w-7 h-7 text-gray-800 dark:text-white" />
//           {itemCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               {itemCount}
//             </span>
//           )}
//         </Link>

//         {/* User Section */}
//         <div className="md:hidden">
//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className=" text-white font-semibold px-4 py-2 rounded-lg flex items-center"
//               >
//                 <PackageIcon className="w-5 h-5 mr-2" />
//               </Link>
//             </SignedIn>
//             {user ? (
//               <div className=" flex items-center space-x-2">
//                 <UserButton />
//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-500">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}</p>
//                 </div>
//               </div>
//             ) : (
//               <SignInButton mode="modal" />
//             )}

//             {user?.passkeys.length === 0 && (
//               <button
//                 onClick={createClerkPasskey}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 Create Passkey
//               </button>
//             )}
//           </ClerkLoaded>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full left-0 top-[80px] flex flex-col items-center p-5 space-y-4">
//           {["Home", "About", "Services", "Contact"].map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-700 dark:text-white text-lg hover:text-blue-500 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </Link>
//           ))}
//           <Form action="/search" className="w-full">
//             <input
//               type="text"
//               name="query"
//               placeholder="Search..."
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </Form>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

//------------------------------------------------------------------------------------------------

const Header = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolling ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"}`}
    >
      <div className="hidden sm:flex justify-between items-center bg-black text-white px-6 py-2 text-sm">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="/" className="underline font-semibold">
          Shop Now
        </Link>
      </div>
      <div className="navbar flex justify-between items-center px-6 py-4 border-b-2 bg-white dark:bg-gray-900">
        <Link
          href="/"
          className="text-2xl font-bold text-black dark:text-white hover:opacity-75"
        >
          Cartify
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`${item.toLowerCase() == "home" ? "/" : `${item.toLowerCase()}`}`}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition hover:border-b-red-500"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Search Box */}
        <Form action="/search" className="hidden md:flex w-full max-w-lg">
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </Form>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Link
            href="/basket"
            className="relative flex items-center p-2  text-black rounded-full"
          >
            <TrolleyIcon className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/orders"
                className="hidden md:block p-2 text-black rounded-full"
              >
                <PackageIcon className="w-6 h-6" />
              </Link>
            </SignedIn>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border border-blue-300"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-white text-2xl z-50"
          >
            {!isOpen ? "☰" : "X"}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}{" "}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full left-0 top-[80px] flex flex-col items-center p-5 space-y-4">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`${item.toLowerCase() == "home" ? "/" : `${item.toLowerCase()}`}`}
              className="text-gray-700 dark:text-white text-lg hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Form action="/search" className="w-full">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </Form>
        </div>
      )}
    </header>
  );
};

export default Header;
