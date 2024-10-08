import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = (props) => {
    return props.isActive ? "nav-item nav-link active" : "nav-item nav-link";
  };

  const dropdownClass = (props) => {
    return props.isActive ? "dropdown-item active" : "dropdown-item";
  };

  return (
    <>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center d-none"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="/assets/img/icon-deal.png"
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <h1 className="m-0 text-primary">Makaan</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <div className="nav-item dropdown">
                <NavLink to="#" className="nav-link dropdown-toggle">Property</NavLink>
                <div className="dropdown-menu rounded-0 m-0">
                  <NavLink to="/property-list" className={dropdownClass}>Property List</NavLink>
                  <NavLink to="/property-type" className={dropdownClass}>Property Type</NavLink>
                  <NavLink to="/property-agent" className={dropdownClass}>Property Agent</NavLink>
                </div>
              </div>
              <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>
            <a href="" className="btn btn-primary px-3 d-none d-lg-flex">
              Add Property
            </a>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Header;
