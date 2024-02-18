import Container from 'react-bootstrap/Container';
import './footer.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Footer() {

    return (
        <>
            <Container fluid className='footer'>
                <div className='row justify-content-center'>
                    <div className='col-3'>Agora</div>
                    <div className='col-3'>
                        <div className='row'>Socials</div>
                        <div className='row'>
                            <a href='#'>Insta</a>
                            <a href='#'>Youtube</a>
                        </div>
                    </div>
                    <div className='col-3'></div>
                </div>       
            </Container>
        </>
    );
}


export default Footer;