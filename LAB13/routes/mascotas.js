const express = require('express');

const router = express.Router();

const path = require('path');

const mascotasController = require('../controllers/mascotas_controller');

router.get('/nueva-mascota', mascotasController.getNuevaMascota);

router.post('/nueva-mascota', mascotasController.postNuevaMascota);

router.get('/', mascotasController.get);

module.exports = router;