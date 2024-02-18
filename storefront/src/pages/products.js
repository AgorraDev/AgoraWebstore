import Container from 'react-bootstrap/Container';
import ProductCard from '../components/productCard.js';
import Navigation from '../components/nav.js';
import '../style/products.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../components/footer.js';

function Products() {
    return (
        <>
        {/*Bootstrap link*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"crossorigin="anonymous"/>
        {/*Links End*/}
      <Navigation /> 
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
        <Footer />
        </>
    );
}


export default Products;