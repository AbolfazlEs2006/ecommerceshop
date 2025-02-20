import { Routes, Route } from "react-router";
import Main from "./pages/Main/Main";
import Notfound from "./components/notfound/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
