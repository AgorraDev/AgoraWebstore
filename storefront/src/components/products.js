import Container from 'react-bootstrap/Container';
import ProductCard from './productCard.js';

import './products.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Products() {
    return (
        <>
        <Container fluid className='pagebg' loading="lazy">
            <div className='container product-bg'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-3'>
                        <h2 className='fw-bold'>All items</h2>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <ProductCard>
                    </ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </div>       
        </Container>
        </>
    );
}


export default Products;