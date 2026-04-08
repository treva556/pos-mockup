//bills
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBill from "./Addbill";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Bills() {
 
        const stockItems = [
          {
            id: 1,
            name: "Trevor International",
            quantity: 120,
            buyingPrice: 20,
          
          },
          {
            id: 2,
            name: "jaws company",
            quantity: 200,
            buyingPrice: 10,
           
          },
          {
            id: 3,
            name: "Pineapple company",
            quantity: 75,
            buyingPrice: 50,
           
          },
        ];
      
        const calculateStockValue = (item) =>
          item.quantity * item.buyingPrice;
      
        return (
          <div className="bg-white shadow rounded-lg p-6">
             
    
            {/* Header */}
            <div className="mb-6 flex">
              <h2 className="text-xl font-semibold text-gray-800">
               Bills
              </h2>
              <button className="absolute bg-purple-400 mr-10  rounded-md right-0 flex items-center"> 
                <Link
                to="/add-bill"
                className="absolute bg-purple-400 mr-10 rounded-md right-0 flex items-center"
                >
                <span className=" m-2 text-white">add Bill</span>
                </Link>
              </button>
            </div>
      
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-purple-300 text-left text-sm text-gray-600">
                  <tr>
                    <th className="px-4 py-3">SUPPLIER / COMPANY</th>
                    <th className="px-4 py-3">PHONE</th>
                    <th className="px-4 py-3">ADDRESS</th>
                    <th className="px-4 py-3">EMAIL</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {stockItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.quantity}</td>
                      <td className="px-4 py-3">{item.buyingPrice}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {calculateStockValue(item)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    

      </div>
   
  );
}

export default Bills;


