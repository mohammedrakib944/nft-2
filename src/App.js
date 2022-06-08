import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/nft" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
