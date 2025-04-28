import { Router } from "express";
import EmployeeHandler from "../handlers/employeeHandler";

const router = Router();
const handler = new EmployeeHandler();

router.post("/login", handler.login.bind(handler));

export default router;
