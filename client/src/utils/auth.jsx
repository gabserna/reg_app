import axios from 'axios';

export const logout = async () => {
  try {
    await axios.post('/api/logout');
    // Envia una solicitud al servidor para cerrar la sesión
  } catch (error) {
    throw new Error('Error during logout:', error);
  }
};
