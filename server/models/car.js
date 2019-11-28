const mongoose = require('mongoose');
const { Schema } = mongoose;

const carsSchema = new Schema({
    carmodel: { type: String, required: true },
    typevehicle: { type: String, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    licensePlate: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Cars', carsSchema);