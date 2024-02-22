import React, {useState, useEffect} from 'react';
import axios from'axios';

import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/Card';
import CardLink from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/Card';

const ProductCard = () => {
    const [products, setProducts] = useState([]);

      useEffect(() => {
//     // Mock data test
//     const mockProducts = [
//         { id: 1, name: "Product 1", price: "19.99"},
//         // Add more product objects as needed
//     ];
//     setProducts(mockProducts);
// }, []);

        axios.get('http://localhost:8000//warehouse/products/')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);
console.log(products)
    return (

        <>
            {products.length > 0 ? (
                products.map(product => (
                <div className='col-4 d-flex justify-content-center'>
                    <Card>
                        <img src='./img_files/koiSS.png' 
                             alt='Product' 
                             width={240}
                             height={320}/>
                        <h4 className='fw-bold px-2'>{product.name}</h4>
                        <p className='px-2 '>{product.price}</p>
                        <a className='btn fw-bold p-2 btn-dark' href='/'>Add to cart</a>
                    </Card>
                </div>
                ))
            ) : (
                <p>loading Products...</p>
            )}

        </>
    );
}

export default ProductCard;