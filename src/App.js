import { React } from "react";
import { Routes, Route } from "react-router";
import Main from "./pages/Main/Main";
import Notfound from "./components/notfound/Notfound";
import Detailsproduct from "./components/detailsproduct/Detailsproduct";

import { ContextProvider } from "./context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/products/:detailsproduct"
            element={<Detailsproduct />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
