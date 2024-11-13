import axios from "axios"; // Asegúrate de importar axios

// URL base para la API de productos
const PRODUCTO_BASE_REST_API_URL = "http://localhost:8000/api/productos/"; // Asegúrate de que termine con '/'

class ProductoService {
  // Obtener todos los productos
  getAllProductos() {
    return axios.get(PRODUCTO_BASE_REST_API_URL);
  }

  // Crear un nuevo producto
  createProducto(producto) {
    return axios.post(PRODUCTO_BASE_REST_API_URL, producto);
  }

  // Obtener un producto por su ID
  getProductoById(productoId) {
    return axios.get(`${PRODUCTO_BASE_REST_API_URL}${productoId}/`); // Asegúrate de que termine con '/'
  }

  // Actualizar un producto por su ID
  updateProducto(productoId, producto) {
    return axios.put(`${PRODUCTO_BASE_REST_API_URL}${productoId}/`, producto); // Asegúrate de que termine con '/'
  }

  // Eliminar un producto por su ID
  deleteProducto(productoId) {
    return axios.delete(`${PRODUCTO_BASE_REST_API_URL}${productoId}/`); // Asegúrate de que termine con '/'
  }
}

export default new ProductoService();
