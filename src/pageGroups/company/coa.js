//coa
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Chartaccounts() {
 
        const stockItems = [
          {
            id: 1,
            name: "COGS",
            type:"Expenses",
            quantity: 120,
            buyingPrice: 20,
          
          },
          {
            id: 2,
            name: "Rents",
            type:"Expenses",
            quantity: 200,
            buyingPrice: 10,
           
          },
          {
            id: 3,
            name: "cash account",
            type:"Assets",
            quantity: 75,
            buyingPrice: 50,
           
          },
           {
            id: 4,
            name: "shop bills",
            type:"Liabilities",
            quantity: 120,
            buyingPrice: 20,
          
          },
          {
            id: 5,
            name: "Bananas",
            type:"Equity",
            quantity: 200,
            buyingPrice: 10,
           
          },
           {
            id: 6,
            name: "shop sale",
            type:"Revenue",
            quantity: 120,
            buyingPrice: 20,
          
          },
          {
            id: 7,
            name: "Bananas",
            type:"Revenue",
            quantity: 200,
            buyingPrice: 10,
           
          },
        ];
      
        const calculateStockValue = (item) =>
          item.quantity * item.buyingPrice;
      
        return (
          <div className="bg-white shadow rounded-lg p-6">
             
    
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Chart of Accounts
              </h2>
              <button className="absolute bg-purple-400 mr-10   rounded-md right-0 flex items-center"> 
                           <Link
                        to="/add-account"
                        className="absolute bg-purple-400 mr-10 rounded-md right-0 flex items-center"
                      >
                        <span className="m-2 text-white">add Account</span>
                      </Link>
              </button>
             
            </div>
      
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg mt-8">
                <thead className="bg-purple-300 text-left text-sm text-gray-600">
                  <tr>
                    <th className="px-4 py-3">NAME</th>
                    <th className="px-4 py-3">TYPE</th>
                    <th className="px-4 py-3">DETAIL TYPE</th>
                    <th className="px-4 py-3">BALANCE</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {stockItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.type}</td>

                      <td className="px-4 py-3">{item.quantity}</td>
                      <td className="px-4 py-3">{item.buyingPrice}</td>
                      {/* <td className="px-4 py-3 font-medium text-gray-900">
                        {calculateStockValue(item)}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
            {/* Total Inventory Value */}
            {/* <div className="mt-6 text-right">
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
          </div>
        );
      } */}
     <p className=" text-red-600 font-semibold italic mt-11">  dea ler (cogs is expenses), (assets), = (liabilities), (equity), (revenue) </p>
     <p className=" text-blue-600 font-semibold italic mt-2">  inc with debit, dec with credit = inc with credit, dec with debit </p>


      </div>
   
  );
}

export default Chartaccounts;

