import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to={'/'}>CRUD APP</Link>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light active" to={'/'}>Owners</Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link text-light" to={'/products'}>Products</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    )
};

export default Header;