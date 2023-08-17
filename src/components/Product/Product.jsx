import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const handleAddtoCart = props.handleAddtoCart

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h5 className='product-name'>{name}</h5>
                    <h4 className='product-price'>Price: {price}</h4>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>
            </div>
            <button className='button-cart' onClick={() => handleAddtoCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;