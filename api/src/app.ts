import express from 'express';
import helmet from 'helmet';

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/index.routes.ts'));





app.listen(80, () => {
  console.log('Servidor corriendo en el puerto 80.');
});


export default app;