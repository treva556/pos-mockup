//bills
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AddBill() {
  return (
   
      <div className="flex-row">
        Add  Bill Page
        

      </div>

   
  );
}

export default AddBill;

// function saveBill(amount, vendor, category)  {
// //1. increase expense or asset (the debit)
//     COA.updateBalance(category, "debit", amount);

// //2. increase the liability (the credit)
//     COA.updateBalance("Accounts Payable", "credit", amount);

// //3. Update the A/P Aging Report
//     AP_Aging.addRecord(vendor, amount, dueDate);
//}


//                              createJournalEntry([
//                               { account: "Inventory", debit: 1000 },
//   Instead of                  { account: "Accounts Payable", credit: 1000 }
//   updateBalance()            ]);

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