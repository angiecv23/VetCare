function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>VetCare</h2>
      </div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

      <div className="auth-buttons">
        <button>Ingresar</button>
        <button>Registrarse</button>
      </div>
    </nav>
  );
}

export default Navbar;
