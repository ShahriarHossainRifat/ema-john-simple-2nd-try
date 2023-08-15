import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
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
            <button className='button-cart'>Add to Cart</button>

        </div>
    );
};

export default Product;