import axios from "axios"; // Asegúrate de importar axios

// URL base para la API de clientes
const CLIENTE_BASE_REST_API_URL = "http://localhost:8000/api/clientes/"; // Asegúrate de que termine con '/'

class ClienteService {
  // Obtener todos los clientes
  getAllClientes() {
    return axios.get(CLIENTE_BASE_REST_API_URL);
  }

  // Crear un nuevo cliente
  createCliente(cliente) {
    return axios.post(CLIENTE_BASE_REST_API_URL, cliente);
  }

  // Obtener un cliente por su ID
  getClienteById(clienteId) {
    return axios.get(`${CLIENTE_BASE_REST_API_URL}${clienteId}/`); // Asegúrate de que termine con '/'
  }

  // Actualizar un cliente por su ID
  updateCliente(clienteId, cliente) {
    return axios.put(`${CLIENTE_BASE_REST_API_URL}${clienteId}/`, cliente); // Asegúrate de que termine con '/'
  }

  // Eliminar un cliente por su ID
  deleteCliente(clienteId) {
    return axios.delete(`${CLIENTE_BASE_REST_API_URL}${clienteId}/`); // Asegúrate de que termine con '/'
  }
}

export default new ClienteService();
