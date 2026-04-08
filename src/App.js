

// app.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navlink from "./components/Navlink";
// import Insights from "./pages/Insights";
import Stock from "./pageGroups/company/Stock";
import Example from "./components/Navreal";
import Chartaccounts from "./pageGroups/company/coa";
import Reports from "./pageGroups/company/reports/reports";
import Customers from "./pageGroups/customerss/Customers";
import Sales_Receipts from "./pageGroups/customerss/Salesreceipt";
import Invoices from "./pageGroups/customerss/Invoices";
import Purchase_orders from "./pageGroups/suppliers/Purchase Orders";
import Bills from "./pageGroups/suppliers/Bills";
import Suppliers from "./pageGroups/suppliers/Suppliers";
import JournalEntries from "./pageGroups/company/jentries";
import Vat from "./pageGroups/company/vat";
import AddBill from "./pageGroups/suppliers/Addbill";
import AddAccount from "./pageGroups/company/coa_add";
import AddItem from "./pageGroups/company/Stock_add";
// import Pos from "./pages/pospage";
function App() {
  return (
    <Router>
      <div className="flex-row">
        {/* Sidebar */}
        <div>
         <Example/>
        </div>
        
        {/* <Navlink /> */}

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
             {/* <Route path="/insights" element={<Insights />} />
            <Route path="/products" element={<Products />} /> */}
            <Route path="/stock" element={<Stock />} /> 
             <Route path="/coa" element={<Chartaccounts />} /> 
            <Route path="/reports" element={<Reports/>} /> 
             <Route path="/entries" element={<JournalEntries />} /> 
            <Route path="/vat" element={<Vat/>} /> 
            <Route path='/customers' element={<Customers/>} />
             <Route path='/sales_receipt' element={<Sales_Receipts/>} />
             <Route path='/invoices' element={<Invoices/>} />
             <Route path='/suppliers' element={<Suppliers/>} />
             <Route path='/bills' element={<Bills/>} />
             <Route path='/purchase_orders' element={<Purchase_orders/>} />
             <Route path="/add-bill" element={<AddBill />} />
             <Route path="/add-account" element={<AddAccount />} />
             <Route path="/add-item" element={<AddItem />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

