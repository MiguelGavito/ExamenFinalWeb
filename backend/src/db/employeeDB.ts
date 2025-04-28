import { Employee } from "../types/employee";

class EmployeeDB {
  private employees: Employee[] = [
    {
      username: "jgomez",
      password: "password123",
      fullName: "Juan Gómez",
      email: "jgomez@skytech.com"
    },
    {
      username: "mlopez",
      password: "pass456",
      fullName: "María López",
      email: "mlopez@skytech.com"
    },
    {
      username: "cruiz",
      password: "sky789",
      fullName: "Carlos Ruiz",
      email: "cruiz@skytech.com"
    }
  ];

  async getEmployee(username: string, password: string): Promise<Employee | null> {
    const found = this.employees.find(emp => emp.username === username && emp.password === password);
    return found || null;
  }
}

export default EmployeeDB;
