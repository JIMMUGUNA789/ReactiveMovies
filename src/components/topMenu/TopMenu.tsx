import "./topMenu.css";
import { BsSunFill } from "react-icons/bs";
const TopMenu = () => {
  return (
    <div className="topMenu">
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
         
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  MOVIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  SERIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV SHOWS
                </a>
              </li>
            </ul>
            <BsSunFill className='topMenuIcon' color="grey" size="25" />

            <span className="navbar-text">
              Dark Theme
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopMenu;
