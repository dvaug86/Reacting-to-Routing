import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav nav-pills  d-flex justify-content-center p-2 shadow">
           
            <div className="col-12 d-flex justify-content-center ">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="logo" />
                </div>
            <div className ='d-flex justify-content-center'>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                    Home
                </NavLink>
                <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                    People
                </NavLink>
                <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                    Films
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

