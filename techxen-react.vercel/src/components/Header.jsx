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
      <Navbar expand="xl"  style={{backgroundColor:'#ffff' ,position: 'sticky',top: '-1px', zIndex:'10'}}>
        <Container fluid style={{ height: "70px" }}>
          <Navbar.Brand href="/" onClick={() => window.location.reload()}>
            <img
              src="	https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
              alt=""
            />
          </Navbar.Brand>
          <Nav
            className="my-2 my-lg-0 navbar-nav"
            style={{ maxHeight: "100px", left: "340px", gap: "25px" }}
          >
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/" style={{ color: "darkslategray" }}>
                Home
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/about" style={{ color: "darkslategray" }}>
                About{" "}
              </Link>
            </div>
            <NavDropdown
              title={
                <Link to="/services" style={{ color: "darkslategray" }}>
                  Services
                </Link>
              }
              style={{ color: "darkslategray" }}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Web-Development"
                  style={{ color: "darkslategray" }}
                >
                  Web Developnment
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/App-Development"
                  style={{ color: "darkslategray" }}
                >
                  App Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/E-commerce-Development"
                  style={{ color: "darkslategray" }}
                >
                  E-commerce Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Graphic-Designing"
                  style={{ color: "darkslategray" }}
                >
                  Graphic Designing
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Data-Analytics"
                  style={{ color: "darkslategray" }}
                >
                  Data Analytics
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link to="/service/SEO" style={{ color: "darkslategray" }}>
                  SEO
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Pay-Per-Click"
                  style={{ color: "darkslategray" }}
                >
                  Pay-Per-Click(PPC)
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Social-Media"
                  style={{ color: "darkslategray" }}
                >
                  Social Media
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Digital-Card"
                  style={{ color: "darkslategray" }}
                >
                  Digital Card Services
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.reload()}>
                <Link
                  to="/service/Ecommerce-Market-Place"
                  style={{ color: "darkslategray" }}
                >
                  Ecommerce Market Place
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/product" style={{ color: "darkslategray" }}>
                Product
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/portfolio" style={{ color: "darkslategray" }}>
                Portfolio{" "}
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/blog" style={{ color: "darkslategray" }}>
                Blog
              </Link>
            </div>
            <div className="nav-link" onClick={() => window.location.reload()}>
              <Link to="/contact" style={{ color: "darkslategray" }}>
                Contact{" "}
              </Link>
            </div>
          </Nav>
          <div className="nav-right" style={{ display: "flex", gap: "20px" }} onClick={() => window.location.reload()}>
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
              src="	https://techxen-react.vercel.app/assets/img/logo/header-logo1.png"
              alt=""
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="offcanvas">
          <Accordion>
            <div style={{ padding: "1rem 1.3rem" }}>
              <a href="/" style={{ border: "none", color: "darkslategray" }}>
                Home
              </a>
            </div>
            <div style={{ padding: "1rem 1.3rem" }}>
              <a
                href="/about"
                style={{ border: "none", color: "darkslategray" }}
              >
                About Us
              </a>
            </div>
            <div style={{ padding: "1rem 1.3rem" }}>
              <a
                href="/contact"
                style={{ border: "none", color: "darkslategray" }}
              >
                Contact
              </a>
            </div>
            <Accordion.Item eventKey="1" style={{ border: "none" }}>
              <Accordion.Header>
                <Link to="/services" style={{ color: "darkslategray" }}>
                  Services
                </Link>
              </Accordion.Header>
              <Accordion.Body>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/Web-Development"
                >
                  Web Developnment
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/App-Development"
                >
                  App Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/E-commerce-Development"
                >
                  E-commerce Development
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/Graphic-Designings"
                >
                  Graphic Designing
                </NavDropdown.Item>
                <NavDropdown.Item style={{ padding: "10px 20px", cursor: "pointer" }} href="/service/Data-Analytics">
                  Data Analytics
              </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/SEO"
                >
                  SEO
                </NavDropdown.Item>
                <NavDropdown.Item style={{ padding: "10px 20px", cursor: "pointer" }} href="/service/Pay-Per-Click">
                  Pay-Per-Click(PPC)
              </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/Social-Media"
                >
                  Social Media
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "10px 20px", cursor: "pointer" }}
                  href="/service/Digital-Card"
                >
                  Digital Card Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    textWrap: "wrap",
                  }}
                  href="/service/Ecommerce-Market-Place"
                >
                  Ecommerce Market Place
                </NavDropdown.Item>
              </Accordion.Body>
            </Accordion.Item>
            <div style={{ padding: "1rem 1.3rem" }}><a href="/product" style={{ border: "none", color: "darkslategray" }}> Product </a></div>
            <div style={{ padding: "1rem 1.3rem" }}><a href="/portfolio" style={{ border: "none", color: "darkslategray" }}>Portfolio{" "}</a></div>
            <div style={{ padding: "1rem 1.3rem" }}><a href="/blog" style={{ border: "none", color: "darkslategray" }}>Blog</a></div>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;