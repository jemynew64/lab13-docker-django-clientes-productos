export const HeaderComponent = () => (
  <div>
    <header>
      <nav className="navbar bg-primary navbar-expand-lg fixed-top">
        <div className="container">
          <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link formato01" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link formato01" href="/productos">
                Producto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link formato01" href="/ventas">
                Ventas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link formato01" href="/compras">
                Compras
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default HeaderComponent;
