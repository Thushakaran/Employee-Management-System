import React, { useEffect, useState } from "react";
import { deleteEmployee, employeeList } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListOfEmployeesComponent = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    getAllEmployees();
  });

  function getAllEmployees() {
    employeeList()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const navigate = useNavigate();

  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container mt-4 shadow p-4 rounded bg-light">
      <h2 className="text-center mb-4 text-primary">List of Employees</h2>

      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-success px-4" onClick={addNewEmployee}>
          + Add Employee
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped table-light">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colSpan={2} className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-info bg-primary"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    className="btn bg-danger"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfEmployeesComponent;
