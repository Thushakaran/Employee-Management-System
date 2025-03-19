import axios from 'axios'

const rest_api_base_url = "http://localhost:8080/api/employees";

export const employeeList = () => axios.get(rest_api_base_url);

export const createEmployee = (employee) => axios.post(rest_api_base_url, employee);

export const getEmployee = (employeeId) => axios.get(rest_api_base_url + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(rest_api_base_url + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(rest_api_base_url + '/' + employeeId);