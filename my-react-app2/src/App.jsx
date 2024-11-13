import "./App.css";
import ListClientesComponent from "./components/ListClientesComponent"; // Asegúrate de que la ruta sea correcta
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClienteComponent from "./components/AddClienteComponent"; // Componente para agregar/editar cliente
import ListProductosComponent from "./components/ListProductosComponent"; // Componente para listar productos
import AddProductoComponent from "./components/AddProductoComponent"; // Componente para agregar/editar producto

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            {/* Rutas para clientes */}
            <Route exact path="/" element={<ListClientesComponent />}></Route>
            <Route path="/clientes" element={<ListClientesComponent />}></Route>
            <Route
              path="/add-cliente"
              element={<AddClienteComponent />}
            ></Route>
            <Route
              path="/edit-cliente/:id"
              element={<AddClienteComponent />}
            ></Route>

            {/* Rutas para productos */}
            <Route
              path="/productos"
              element={<ListProductosComponent />}
            ></Route>
            <Route
              path="/add-producto"
              element={<AddProductoComponent />}
            ></Route>
            <Route
              path="/edit-producto/:id"
              element={<AddProductoComponent />}
            ></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
