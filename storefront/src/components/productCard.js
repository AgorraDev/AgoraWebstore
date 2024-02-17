import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/Card';
import CardLink from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/Card';


function ProductCard() {
    return(
        <>
        <div className='col-3 d-block '>
            <Card >
                <CardImg src='' alt='Product'></CardImg>
                <CardBody>
                    <CardTitle>Item</CardTitle>
                    <CardText>This is an example item</CardText>
                    <CardLink><a  className='btn btn-dark m-2' href='/'>Go to item!</a></CardLink>
                </CardBody>
            </Card>
        </div>
        </>
    )
}

export default ProductCard;