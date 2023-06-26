import text from '../assests/img/text_logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='shadow nav-bg py-3'>
      <Container>
        <Navbar.Brand href="#home">
            <img
              src={text}
              width="180"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto align-self-center flex-fill d-lg-flex justify-content-lg-between">
            <Nav className='flex-fill'>   
                <Nav className='nav navbar-nav d-flex justify-content-between mx-lg-auto'>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-dark" href="dashboard">Beranda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-dark" href="tentang">Tentang Kami</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-dark" href="kost">Kost</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-dark" href="kontak">Hubungi Kami</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Nav>
          </Nav>
          <Nav>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-secondary" href="halaman3">Daftar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item p-1">
                        <Nav.Link className="nav-link text-secondary" href="halaman3">Masuk</Nav.Link>
                    </Nav.Item>
            <Button variant="outline-danger" className='ms-2'><span>Pasang iklan</span></Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;