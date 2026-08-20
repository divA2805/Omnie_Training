import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, employees } from './fakeDatabase';

@Injectable()
export class EmployeeService {
  create(createEmployeeDto: CreateEmployeeDto): Employee {
    const newID = employees.length + 1;
    const newEmployee: Employee = {
      id: newID,
      name: createEmployeeDto.name,
      dept: createEmployeeDto.dept,
      project: createEmployeeDto.project,
      rank: createEmployeeDto.rank,
      email: createEmployeeDto.email,
      salary: createEmployeeDto.salary,
    };
    employees.push(newEmployee);

    return newEmployee;
  }

getAll(): Employee[] {
  return employees;
}

findOne(employeeId: number): Employee | undefined {
  return employees.find(employee => employee.id === employeeId);

}

update(
  employeeId: number,
  updateEmployeeDto: UpdateEmployeeDto,
): Employee | undefined {
  const employee = employees.find(
    employee => employee.id === employeeId,
  );

  if (!employee) {
    return undefined;
  }

  employee.name = updateEmployeeDto.name ?? employee.name;
  employee.dept = updateEmployeeDto.dept ?? employee.dept;
  employee.project = updateEmployeeDto.project ?? employee.project;
  employee.rank = updateEmployeeDto.rank ?? employee.rank;
  employee.email = updateEmployeeDto.email ?? employee.email;
  employee.salary = updateEmployeeDto.salary ?? employee.salary;

  return employee;
}

remove(employeeId: number): Employee | undefined {
  const index = employees.findIndex(
    employee => employee.id === employeeId,
  );

  if (index === -1) {
    return undefined;
  }

  const deletedEmployee = employees.splice(index, 1);

  return deletedEmployee[0];
}
}
