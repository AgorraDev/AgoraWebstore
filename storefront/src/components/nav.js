import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Navigation() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/hello-world/')
        .then(response => {
            setMessage(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    },   []);

    return (
        <>
        <Container fluid className="hero-bg-img position-relative">
          <Container fluid>
            <Navbar className='fixed-top bg-transparent'>
                <Container fluid className='d-flex justify-content-between'>
                    <Nav id="link" className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link  href='#home'>Store</Nav.Link>
                        <Nav.Link  href='#home'>About</Nav.Link>
                    </Nav>
                      <Navbar.Brand id='brand' className='me-auto'>AGORA</Navbar.Brand>
                        <Nav id="link">
                            <Nav.Link id="" href='#home'>Account</Nav.Link>
                            <Nav.Link id="" href='#home'>Cart<img src="C:\Users\theha\Desktop\Webstore_files\icons8-shopping-cart-24.png" class="img-fluid" alt=''></img></Nav.Link>
                            
                    </Nav>
                </Container>
                </Navbar> 
                </Container>
                <Container fluid>
                  <div class="container col-xxl-12 px-3"> 
                  <div class="row g-3 py-5 ">
                    {/* <div class="col-12 col-sm-5 col-lg-4">
                     <img src="https://images.unsplash.com/photo-1707408693907-652fe2d6c4be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="mx-lg-auto img-fluid hero-content-img" alt="secondary image" width="700" height="500" loading="lazy"></img>
                    </div> */}
                    <div class="col-lg-6 col-12 col-sm-8 py-3 px-4 hero-content">
                      <h1 class="display-8 fw-bold lh-1 mb-2">New collection</h1>
                      <p class="lead col-12">The first drop of apparel from the freshest streetwear brand. Supporting the great outdoors and everything that comes with the enjoyment of nature.</p>
                      <div class="d-flex col-4 gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-outline-light btn-lg px-5 me-md-2">SHOP</button>
                      </div>
                    </div>
                  </div>
                </div>
                </Container>
        </Container>
        <Container fluid className='hero2-bg'>
          <div class="container col-xxl-12 px-3">
            <div class="row g-3">
              <div class="col-6 hero2-content-img">
                <div class="hero2-content-img">
                </div>
              </div>
              <div class="p-2 col-3 hero2-content">
                <h1 class="display-8 fw-bold 1h-1 m-2">KOI Tee</h1>
                <p class="lead">Strength. Courage. Determination.</p>
                <div class="d-flex col-4 gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-outline-dark btn-lg px-5 me-md-2">SHOP</button>
                </div>
              </div>
            </div>

          </div>
        </Container>
        </>
    );
}


export default Navigation;