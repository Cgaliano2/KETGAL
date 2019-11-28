const Car = require('../models/car');
const _ = require('underscore');
const carsCtrl = {};

carsCtrl.Test = (req, res) => {
    res.json({
        status: 'api works'
    });
}
carsCtrl.getCars = async(req, res, next) => {
    const cars = await Car.find();
    res.json(cars);
};

carsCtrl.createCars = async(req, res, next) => {
    const car = new Car(req.body)
    await car.save();
    res.json({ 'status': 'Car Stored' });
};

carsCtrl.getCar = async(req, res, next) => {
    const { id } = req.params;
    const cars = await Car.findById(id);
    res.json(cars);
};



carsCtrl.deleteCars = async(req, res, next) => {
    await Car.findByIdAndRemove(req.params.id);
    res.json({ status: 'Car Deleted' });
};

module.exports = carsCtrl;