import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Open API
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comment">
                Comments
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/albums">
                Albums
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/photos">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header