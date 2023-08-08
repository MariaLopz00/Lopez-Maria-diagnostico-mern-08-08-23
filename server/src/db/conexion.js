const mongoose = require('mongoose');
require('dotenv').config();

const conexion = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
  }
};

module.exports = conexion;
