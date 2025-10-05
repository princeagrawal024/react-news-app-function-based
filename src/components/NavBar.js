import {Link} from "react-router-dom";

const NavBar = ()=> {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home"><strong>Dainik Samachaar</strong></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                 <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                {/* We can add search bar also, which we will add at later stage beause our new api suppors search api */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default NavBar
