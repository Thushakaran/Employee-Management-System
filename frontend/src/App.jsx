import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./componet/HeaderComponent";
import ListOfEmployeesComponent from "./componet/ListOfEmployeesComponent";
import EmployeeComponent from "./componet/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListOfEmployeesComponent />} />
          <Route path="/employees" element={<ListOfEmployeesComponent />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
