

// app.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navlink from "./components/Navlink";
import Insights from "./pages/Insights";
import Products from "./pages/Products";
import Stock from "./pages/Stock";
import Example from "./components/Navreal";
import Pos from "./pages/pospage";
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
             <Route path="/" element={<Pos />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/products" element={<Products />} />
           <Route path="/stock" element={<Stock />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;