

// app.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navlink from "./components/Navlink";
// import Insights from "./pages/Insights";
import Stock from "./pageGroups/company/Stock";
import Example from "./components/Navreal";
import Chartaccounts from "./pageGroups/company/coa";
import Reports from "./pageGroups/company/reports/reports";
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

