package com.se.Employee.Management.System.service;

import com.se.Employee.Management.System.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long id, EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeId);
}
