import { React } from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main/Main";
import Product from "./pages/product/Product";
import Notfound from "./components/notfound/Notfound";
import Detailsproduct from "./components/detailsproduct/Detailsproduct";

import { ContextProvider } from "./context/Context";

function App() {
  document.title = "Es shop";
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/products/:detailsproduct"
            element={<Detailsproduct />}
          />
          <Route path="/products" element={<Product />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
