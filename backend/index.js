import express from 'express';
import sumController from './src/components/sum/sumController.js';
import levelController from './src/components/level/levelController.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/suma', sumController.router)
app.use('/levels', levelController.router)

//PUERTO
const PORT = 3002;

app.listen(PORT)
console.log(`Servidor eschuchando en puerto ${PORT}, http://localhost:${PORT}/`)