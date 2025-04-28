import { Request, Response, NextFunction } from "express";
import EmployeeController from "../controllers/employeeController";

const employeeControllerInstance = new EmployeeController();

class EmployeeHandler {
  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const { username, password } = request.body;

      if (!username || !password) {
        response.status(400).json({ error: "Faltan datos de usuario o contraseña." });
        return;
      }

      const employeeData = await employeeControllerInstance.login(username, password);
      response.status(200).json(employeeData);
    } catch (error) {
      next(error);
    }
  }
}

export default EmployeeHandler;
