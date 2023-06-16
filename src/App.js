import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import AppCars from "./components/AppCars";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index path="/cars" element={<AppCars />}></Route>
      </Routes>
    </div>
  );
}

export default App;
