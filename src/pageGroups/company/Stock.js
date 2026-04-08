// stock

// src/pages/Stock.js
import React from "react";

export default function Stock() {
  const stockItems = [
    {
      id: 1,
      name: "Apples",
      quantity: 120,
      buyingPrice: 20,
      sellingPrice: 35,
    },
    {
      id: 2,
      name: "Bananas",
      quantity: 200,
      buyingPrice: 10,
      sellingPrice: 18,
    },
    {
      id: 3,
      name: "Pineapples",
      quantity: 75,
      buyingPrice: 50,
      sellingPrice: 80,
    },
  ];

  const calculateStockValue = (item) =>
    item.quantity * item.buyingPrice;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Item List (Stock)
        </h2>
        <p className="text-sm text-gray-500">
          Overview of current inventory levels
        </p>
        <button className="absolute bg-purple-400 mr-10  rounded-md right-0 flex items-center"> 
               <h3 className=" m-2"> add supplier</h3>
         </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-left text-sm text-gray-600">
            <tr>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Buying Price (KSh)</th>
              <th className="px-4 py-3">Selling Price (KSh)</th>
              <th className="px-4 py-3">Stock Value (KSh)</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {stockItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.quantity}</td>
                <td className="px-4 py-3">{item.buyingPrice}</td>
                <td className="px-4 py-3">{item.sellingPrice}</td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {calculateStockValue(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       


      {/* Total Inventory Value */}
      <div className="mt-6 text-right">
        <span className="text-sm text-gray-500 mr-2">
          Total Inventory Value:
        </span>
        <span className="text-lg font-semibold text-gray-800">
          KSh{" "}
          {stockItems.reduce(
            (total, item) => total + calculateStockValue(item),
            0
          )}
        </span>
      </div>

          <p className=" text-red-600 font-semibold italic mt-11"> Stock add updates Invoices table & increases stock (assets) & decreases cash (assets)   (revenue) </p>

    </div>
  );
}