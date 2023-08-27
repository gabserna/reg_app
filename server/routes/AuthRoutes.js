const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

// Manejar el cierre de sesión
router.post('/logout', (req, res) => {
  // Realizar cualquier limpieza necesaria para cerrar la sesión
  // Por ejemplo, eliminar el token del usuario de la base de datos de tokens válidos

  // Aquí podrías agregar código para invalidar el token del usuario
  // y realizar cualquier otro proceso necesario al cerrar sesión

  res.status(200).json({ message: 'Logout successful' });
});

// Manejar el cierre de sesión
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);


module.exports = router;