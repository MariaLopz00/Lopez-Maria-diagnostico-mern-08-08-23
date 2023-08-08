const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean
  },
},{
    versionKey: false,
    timestamps:false
});

module.exports = mongoose.model('Task', taskSchema);

