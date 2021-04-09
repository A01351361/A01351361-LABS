const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const mascotasController = require('../controllers/mascotas_controller');

router.get('/nueva-mascota', mascotasController.getNuevaMascota);

router.post('/nueva-mascota', mascotasController.postNuevaMascota);

router.get('/:mascota_id', mascotasController.getMascota);

router.post('/buscar', mascotasController.postBuscar);

router.get('/', mascotasController.get);

module.exports = router;