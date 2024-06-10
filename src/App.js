import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cards from "./pages/cards/cards";
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
