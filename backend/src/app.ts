import express from 'express';
import cors from 'cors';
import authRoutes from './routes/employeeRoutes';

const app = express();

// Middleware para habilitar CORS y parsear JSON
app.use(cors());
app.use(express.json());

// Ruta para manejar la autenticación
app.use('/api', authRoutes);

export default app;
