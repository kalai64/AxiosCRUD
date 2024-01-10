import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  // Navigate hook for programmatic navigation
  let navigate = useNavigate();

  return <>
      <div >
        <Navbar expand="lg" style={{background:'rgb(241,242,244)'}}>
          <Container>
            
            <Navbar.Brand href="#home">
              
              <b>Axios CRUD</b>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            
            <Navbar.Collapse id="basic-navbar-nav">
              <div className='text-center'>
                
                <Nav className="me-auto">
                  <Nav.Link onClick={() => navigate('/')} style={{color:'rgb(42,85,229)'}}><b >Home</b></Nav.Link>
                  <Nav.Link onClick={() => navigate('/dashboard')} style={{color:'rgb(42,85,229)'}}><b >DashBoard</b></Nav.Link>
                  <Nav.Link onClick={() => navigate('/create')} style={{color:'rgb(42,85,229)'}}><b >Create</b></Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
}

export default Topbar;