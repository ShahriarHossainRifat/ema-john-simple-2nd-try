import { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Products length: {products.length}</h2>
            </div>
            <div className="cart-container">
                <h2>Cart items will be displayed here</h2>
            </div>
        </div>
    );
};

export default Shop;