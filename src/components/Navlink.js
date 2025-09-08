import '../App.css';
import React, { useState } from "react";
// import {
//   Home,
//   BarChart,
//   ShoppingCart,
//   Users,
//   Settings,
//   ChevronDown,
// } from "lucide-react";
// function Navlink() {
//   return (
//     <div className="">
     

//      <h1 className="text-3xl font-bold underline">
//       dashboard here
//      </h1>
//     </div>
//   );
// }

// export default Navlink;
// //

// import { useState } from "react";
// import {
//   Home,
//   BarChart,
//   ShoppingCart,
//   Users,
//   Settings,
//   ChevronDown,
// } from "lucide-react"; // install lucide-react for icons

export default function Navlink() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 h-screen bg-white border-r shadow-sm flex flex-col">
      {/* Logo */}
      <div className="p-4 text-2xl font-bold text-blue-400 border-b">
        TailPOS
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <Home size={20} /> */}
               Insights
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <BarChart  */}
              {/* size={20} 
              />  */}
              Products
            </a>
          </li>
              <li>
            <button
              onClick={() => toggleMenu("ecommerce")}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              <span className="flex items-center gap-3">
                {/* <ShoppingCart  */}
                {/* size={20} /> */}
                 Products
              </span>
              {/* <ChevronDown
                className={`transition-transform ${
                  openMenu === "ecommerce" ? "rotate-180" : ""
                }`}
              /> */}
            </button>
            {openMenu === "ecommerce" && (
              <ul className="ml-8 mt-1 space-y-1 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    All Items
                  </a>
                </li>
               
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => toggleMenu("ecommerce")}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              <span className="flex items-center gap-3">
                {/* <ShoppingCart  */}
                {/* size={20} /> */}
                 eCommerce
              </span>
              {/* <ChevronDown
                className={`transition-transform ${
                  openMenu === "ecommerce" ? "rotate-180" : ""
                }`}
              /> */}
            </button>
            {openMenu === "ecommerce" && (
              <ul className="ml-8 mt-1 space-y-1 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Customers
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <Users size={20} /> */}
               CRM
            </a>
          </li>
         
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-sm text-gray-500">
        © 2025 TailPOS
      </div>
    </div>
  );
}