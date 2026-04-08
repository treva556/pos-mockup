//add stock
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function AddItem() {
  const [supplierId, setSupplierId] = useState("");
  const [items, setItems] = useState([
    { item_id: "", quantity: 1, cost_price: 0 },
  ]);

  const handleSubmit = async () => {
    const response = await fetch("/api/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ supplier_id: supplierId, items }),
    });

    const data = await response.json();
    console.log("Saved:", data);
  };

  return (
    <div>
      <h2 className=" border-b-lime-900 font-bold text-xl">Add Item</h2>

      {/* <input
        placeholder="Supplier ID"
        value={supplierId}
        onChange={(e) => setSupplierId(e.target.value)}
      />

      {items.map((item, index) => (
        <div key={index}>
          <input
            placeholder="Item ID"
            onChange={(e) =>
              updateItem(index, "item_id", e.target.value)
            }
          />
          <input
            placeholder="Qty"
            type="number"
            onChange={(e) =>
              updateItem(index, "quantity", e.target.value)
            }
          />
          <input
            placeholder="Cost"
            type="number"
            onChange={(e) =>
              updateItem(index, "cost_price", e.target.value)
            }
          />
        </div>
      ))} */}

   <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       Item Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Select ↓"></input>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
   
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
        Selling Price
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="00.00"></input>
    </div>
  </div>
   <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
        Buying Price
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="00.00"></input>
    </div>
  </div>
</form>


         <button className="bg-purple-500 m-2 p-2 text-white" onClick={handleSubmit}>Save Bill</button>
    </div>
  );
}






