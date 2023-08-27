const logout = (req, res) => {
  // Realizar cualquier limpieza necesaria para cerrar la sesión
  // Por ejemplo, eliminar el token del usuario de la base de datos de tokens válidos

  // Aquí podrías agregar código para invalidar el token del usuario
  // y realizar cualquier otro proceso necesario al cerrar sesión

  // Responder con éxito si todo va bien
  res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
  logout, // Exportar la función de cierre de sesión
};
