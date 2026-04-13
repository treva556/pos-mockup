//users

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Users() {
 
        const stockItems = [
          {
            id: 1,
            name: "John Doe",
            email: "something@gmail.com",
            role: "ADMIN",
            phone: "(+254) 0713703389",
          },
          {
            id: 2,
            name: "Mark Trevor",
            email: "something@gmail.com",
            role: "CASHIER",
            phone: "(+254) 0713703389",
          },
          {
            id: 3,
            name: "Bruce Wayne",
            email: "nothing@gmail.com",
            role: "CASHIER",
            phone: "(+254) 0713703389",
          },
        ];
      
        const calculateStockValue = (item) =>
          item.quantity * item.buyingPrice;
      
        return (
          <div className="bg-white shadow rounded-lg p-6">
             
    
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                User Center 
              </h2>
              <h3 className="text-lg font-semibold text-purple-700 "> : Only ADMINS can create & see users</h3>
             <button className="absolute border-purple-400 border-2 mr-10 rounded-md right-0 flex items-center"> 
                <h3 className=" m-2"> add user</h3>
              </button>
            </div>
      
            {/* Table */}
            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border border-gray-200 rounded-lg mt-5">
                <thead className="bg-purple-300 text-left text-sm text-white">
                  <tr>
                    <th className="px-4 py-3">NAME</th>
                    <th className="px-4 py-3">EMAIL</th>
                    <th className="px-4 py-3">ROLE</th>
                    <th className="px-4 py-3">PHONE</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {stockItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.role}</td>
                      <td className="px-4 py-3">{item.phone}</td>
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

export default Users;

