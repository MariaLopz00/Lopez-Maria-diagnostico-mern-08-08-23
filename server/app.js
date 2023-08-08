const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/task.routes');
const connectDB = require('./src/db/conexion');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Llama a la función de conexión a la base de datos
connectDB();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
