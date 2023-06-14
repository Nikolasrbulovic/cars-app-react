import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import AppCars from "./components/AppCars";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
      <Header></Header>
      <Routes>
        <Route index path="/cars" element={<AppCars />}></Route>
      </Routes>

      </Provider>
    </div>
  );
}

export default App;
