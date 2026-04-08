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
      <h2>Add Bill</h2>

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

      <button onClick={handleSubmit}>Save Bill</button>
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