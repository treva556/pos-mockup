

// Navlink.js
import '../App.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Insights from '../pages/Insights';
// import Products from '../pages/Products';
// import Stock from '../pages/Stock';
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
  const [sopenMenu, setsOpenMenu] = useState(null);


  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };


  const togglesMenu = (smenu) => {
    setsOpenMenu(sopenMenu === smenu ? null : smenu);
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
            <Link
                to="/insights"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
                Insights / Reports
            </Link>
            </li>

            {/* <li>
            <Link
                to="/products"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
                Customers
            </Link>
            </li> */}
             <li>
            <Link
                to="/stock"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
                Stock
            </Link>
            </li>

   <li>
            <button
              onClick={() => toggleMenu("ecommerce")}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              <span className="flex items-center gap-3">
                {/* <ShoppingCart  */}
                {/* size={20} /> */}
                 Customers
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
                    Create Sales Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Create Invoice
                  </a>
                </li>
                  <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Enter Sales Receipt
                  </a>
                </li>
                  <li>
                  <a
                    href="#"
                    className="block p-2 rounded hover:bg-indigo-50"
                  >
                    Receive payments
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
                 Suppliers
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
          {/* <li>
            <button
              onClick={() => togglesMenu("ecommerce")}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              <span className="flex items-center gap-3">
                {/* <ShoppingCart  */}
                {/* size={20} /> */}
                 {/* eCommerce
              </span> */}
              {/* <ChevronDown
                className={`transition-transform ${
                  openMenu === "ecommerce" ? "rotate-180" : ""
                }`}
              /> 
            </button>
            {sopenMenu === "ecommerce" && (
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
          </li> */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <Users size={20} /> */}
              Profile
            </a>
          </li>
            <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <Users size={20} /> */}
               Accounts
            </a>
          </li>
            <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 text-gray-700"
            >
              {/* <Users size={20} /> */}
             Settings
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



//