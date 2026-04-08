//bills
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function AddBill() {
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
      <h2 className=" border-b-lime-900 font-bold text-xl">Add Bill</h2>

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
       Supplier Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Select ↓"></input>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
   
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
   <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-number">
        Ammount
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="00.00"></input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"></input>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"></input>
    </div>
  </div>
</form>


         <button className="bg-purple-500 m-2 p-2 text-white" onClick={handleSubmit}>Save Bill</button>
  <p className=" text-red-600 font-semibold italic mt-11"> Bills add updates Bills table also increases stock (assets)    &     increases bills debt (liabilities) </p>

    </div>
  );
}


































// function AddBill() {
//   return (
   
//       <div className="flex-row">
//         Add  Bill Page
        

//       </div>

   
//   );
// }

// export default AddBill;

// function saveBill(amount, vendor, category)  {
// //1. increase expense or asset (the debit)
//     COA.updateBalance(category, "debit", amount);

// //2. increase the liability (the credit)
//     COA.updateBalance("Accounts Payable", "credit", amount);

// //3. Update the A/P Aging Report
//     AP_Aging.addRecord(vendor, amount, dueDate);
// }


// //                              createJournalEntry([
// //                               { account: "Inventory", debit: 1000 },
// //   Instead of                  { account: "Accounts Payable", credit: 1000 }
// //   updateBalance()            ]);

// createJournalEntry({
//   description: "Supplier Bill",
//   lines: [
//     { account: "Inventory", debit: 1000 },
//     { account: "Accounts Payable", credit: 1000 }
//   ]
// })


            // What is updateBalance?

            // It’s a function that likely does:

            // if (type === "debit") {
            //   account.balance += amount;
            // } else {
            //   account.balance -= amount;
            // }

            ////    when bill saved, crud on bills table & maths & crud on COA & reports