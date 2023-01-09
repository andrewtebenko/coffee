import {Link} from 'react-router-dom';

import './navbar.scss';

const NavBar = (props) => {
    return (
        <div className="row">
            <div className="col">
                <nav style={props.margin} className="nav">
                    <div className="d-flex align-items-end">
                        <a href="#">
                            <img style={props.transform} src={props.img} alt="grain" className="logo-img"/>
                        </a>
                        <Link to="/" style={props.color} className="nav-link logo-link">Coffee house</Link>
                    </div>
                    <Link to="/coffee" style={props.color} className="nav-link">Our coffee</Link>
                    <Link to="/pleasure" style={props.color} className="nav-link">For your pleasure</Link>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;