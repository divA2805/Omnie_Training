import { Controller, Get, Post,Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
//import {Employee,employees} from './fakeDatabase';
import type { Employee } from './fakeDatabase';
import { get } from 'axios';


@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
 
  @Get('data')
  findAll(): Employee[] {
    return this.employeeService.getAll();
  }



  @Get('getbyId/:id')
  findOne(@Param('id') id: string): Employee | undefined {
    const employeeId=+id;
    return this.employeeService.findOne(employeeId);
  }


  @Post()
  addEmployee(@Body() createEmployeeDto:CreateEmployeeDto): Employee {
    return this.employeeService.create(createEmployeeDto);
  }

  @Put(':id')
updateEmployee(
  @Param('id') id: string,
  @Body() updateEmployeeDto: UpdateEmployeeDto,
): Employee | undefined {
  const employeeId = +id;

  return this.employeeService.update(
    employeeId,
    updateEmployeeDto,
  );
}

@Delete(':id')
  deleteEmployee(
    @Param('id') id: string,
  ): Employee | undefined {
    const employeeId = +id;

    return this.employeeService.remove(employeeId);
  }
}

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
//     return this.employeeService.update(+id, updateEmployeeDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.employeeService.remove(+id);
//   }

 // @Post()
  // create(@Body() createEmployeeDto: CreateEmployeeDto) {
  //   return this.employeeService.create(createEmployeeDto);
  // }
