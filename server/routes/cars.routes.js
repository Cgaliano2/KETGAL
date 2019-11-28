const express = require('express');
const router = express.Router();

const cars = require('../controllers/cars.controller');

router.get('/', cars.getCars);
router.post('/', cars.createCars);
router.get('/:id', cars.getCar);
router.put('/:id', cars.editCar);
router.delete('/:id', cars.deleteCars);

module.exports = router;