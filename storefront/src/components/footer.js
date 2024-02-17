import Container from 'react-bootstrap/Container';
import './footer.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Footer() {

    return (
        <>
            <Container fluid className='footer'>
                <div className='row justify-contents-between'>
                    <div className='me-auto col-4'>Group 1</div>
                    <div className='mw-auto col-4'>Group 2</div>
                    <div className='me-auto col-4'>Group 3</div>
                </div>       
            </Container>
        </>
    );
}


export default Footer;