import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavTwo() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="About Us" href="#">
            <NavDropdown.Item href="/our-produce ">Our Produce</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Engage" href="#">
            <NavDropdown.Item href=" ">Farm Visit</NavDropdown.Item>
            <NavDropdown.Item href=" ">Workshops</NavDropdown.Item>
            <NavDropdown.Item href=" ">Farm Cafe</NavDropdown.Item>           
             </NavDropdown>

             <NavDropdown title="Connect" href="#">
            <NavDropdown.Item href=" ">Partner with us</NavDropdown.Item>
            <NavDropdown.Item href=" ">Career</NavDropdown.Item>
            <NavDropdown.Item href=" ">Contact Us</NavDropdown.Item>           
             </NavDropdown>

           <Link to='/farmers-coner'>Farmer's Corner</Link> 
              
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTwo;