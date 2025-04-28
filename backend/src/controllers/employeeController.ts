import EmployeeDB from "../db/employeeDB";

const employeeDBInstance = new EmployeeDB();

class EmployeeController {
  async login(username: string, password: string) {
    const employee = await employeeDBInstance.getEmployee(username, password);

    if (employee) {
      return {
        fullName: employee.fullName,
        email: employee.email
      };
    } else {
      throw new Error("Nombre de usuario o contraseña incorrectos.");
    }
  }
}

export default EmployeeController;
