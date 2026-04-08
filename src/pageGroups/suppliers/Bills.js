//bills
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBill from "./Addbill";

function Bills() {
  return (
   
      <div className="flex-row">
         Bills Page
         <div>add bills button</div>
         <div><AddBill/> </div>

      </div>

   
  );
}

export default Bills;

