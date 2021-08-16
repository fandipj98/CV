import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

import './Header.css';

function Header(props) {
  const pathName = props?.location?.pathname  
  
  return (
        <Navbar expand="lg" sticky="top" className="header">
          <Nav.Link as={NavLink} to="/" className="header_navlink">
            <Navbar.Brand className="header_home">
              <HomeIcon />
            </Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="header_left">
              <Nav.Link as={NavLink} to="/" className={pathName === '/' ? 'header_link_active' : 'header_link'}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/education" className={pathName === '/education' ? 'header_link_active' : 'header_link'}>Education</Nav.Link>
              <Nav.Link as={NavLink} to="/skills" className={pathName === '/skills' ? 'header_link_active' : 'header_link'}>Skills</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
            </Nav>

            <div className="header_right">

            </div>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);