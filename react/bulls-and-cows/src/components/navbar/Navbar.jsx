import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-main fs-3">
     <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to="/" className="navbar-brand">
        {/* <img src="./shopping-cart-red-wheels.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"> */}
        Bulls and Cows
      </Link>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
           <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-user" className="nav-link" href="#">Add User</Link>
          </li>
          <li className="nav-item">
            <Link to="/bulls-and-cows" className="nav-link">Bulls and Cows Game</Link>
          </li>
          <li className="nav-item">
            <Link to="/use-effect" className="nav-link">useEffect</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div> 
  </nav>
  )
}
