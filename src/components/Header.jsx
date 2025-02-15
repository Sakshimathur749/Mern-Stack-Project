import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import { useEffect, useState } from 'react';
import { Accordion, Offcanvas } from 'react-bootstrap';
import './MediaQuerie.css';
import { Link, useLocation } from 'react-router-dom';
import "../index-CNfx030l.css";
import Icon1 from '../assets/Icon/icon-phone.png'
import DevexaLogo from '../assets/Devexalogo.png'
function Header() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0.5);
  }, [location]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Navbar expand="xl"  className='bg-white position-sticky' style={{top: '-1px', zIndex:'10'}}>
        <Container fluid style={{ height: "70px" }}>
          <Navbar.Brand href="/" onClick={() => window.location.reload()}>
            <img
              src={DevexaLogo}
              alt=""
            />
          </Navbar.Brand>
          <Nav
            className="my-2 my-lg-0 navbar-nav gap-4"
            style={{ maxHeight: "100px", left: "340px" }}
          >
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/" className='darkslategray'>
                Home
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/about" className='darkslategray'>
                About{" "}
              </Link>
            </div>
            <NavDropdown
              title={
                <Link to="/services" className='darkslategray'>
                  Services
                </Link>
              }
             className='darkslategray'
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Web-Development" className='darkslategray'
                >
                  Web Developnment
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/App-Development" className='darkslategray'
                >
                  App Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/E-commerce-Development" className='darkslategray'
                >
                  E-commerce Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Graphic-Designing" className='darkslategray'
                >
                  Graphic Designing
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Data-Analytics" className='darkslategray'
                >
                  Data Analytics
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link to="/service/SEO" className='darkslategray'>
                  SEO
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Pay-Per-Click" className='darkslategray'
                >
                  Pay-Per-Click(PPC)
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Social-Media" className='darkslategray'
                >
                  Social Media
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Digital-Card" className='darkslategray'
                >
                  Digital Card Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Ecommerce-Market-Place" className='darkslategray'
                >
                  Ecommerce Market Place
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/product" className='darkslategray'>
                Product
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/portfolio" className='darkslategray'>
                Portfolio{" "}
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/blog" className='darkslategray'>
                Blog
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/contact" className='darkslategray'>
                Contact{" "}
              </Link>
            </div>
          </Nav>
          <div className="nav-right d-flex gap-4" onClick={() => window.location.reload()}>
            <div className="contact-btn">
              <div className="icon">
                <img
                  src={Icon1}
                  alt=""
                />
              </div>
              <div className="headding">
                <p>Make a Call</p>
                <a href="/contact">+91 86907 31436</a>
              </div>
            </div>
            <Link to="/getquotes" >
            <div className="button"><a className="theme-btn1" href="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></a></div>
            </Link>
          </div>
          <Navbar.Toggle onClick={handleShow} />
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={DevexaLogo}
              alt=""
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="offcanvas">
          <Accordion>
            <div className='py-3 px-4'>
              <a className='border-0 darkslategray' href="/">
                Home
              </a>
            </div>
            <div className='py-3 px-4'>
              <a
                href="/about" className='border-0  darkslategray'
                
              >
                About Us
              </a>
            </div>
            <div className='py-3 px-4'>
              <a
                href="/contact" className='border-0 darkslategray'
              >
                Contact
              </a>
            </div>
            <Accordion.Item eventKey="1"className='border-0'  >
              <Accordion.Header>
                <Link to="/services" className='darkslategray'>
                  Services
                </Link>
              </Accordion.Header>
              <Accordion.Body>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/Web-Development"
                >
                  Web Developnment
                </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/App-Development"
                >
                  App Development
                </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/E-commerce-Development"
                >
                  E-commerce Development
                </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/Graphic-Designings"
                >
                  Graphic Designing
                </NavDropdown.Item>
                <NavDropdown.Item  className='pointer py-3 px-4' href="/service/Data-Analytics">
                  Data Analytics
              </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/SEO"
                >
                  SEO
                </NavDropdown.Item>
                <NavDropdown.Item  className='pointer py-3 px-4' href="/service/Pay-Per-Click">
                  Pay-Per-Click(PPC)
              </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/Social-Media"
                >
                  Social Media
                </NavDropdown.Item>
                <NavDropdown.Item className='pointer py-3 px-4'
                  href="/service/Digital-Card"
                >
                  Digital Card Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  className='pointer py-3 px-4 text-wrap'
                  href="/service/Ecommerce-Market-Place"
                >
                  Ecommerce Market Place
                </NavDropdown.Item>
              </Accordion.Body>
            </Accordion.Item>
            <div className='py-3 px-4'><a className='border-0 darkslategray' href="/product" > Product </a></div>
            <div className='py-3 px-4'><a className='border-0 darkslategray' href="/portfolio">Portfolio{" "}</a></div>
            <div className='py-3 px-4'><a className='border-0 darkslategray' href="/blog" >Blog</a></div>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;