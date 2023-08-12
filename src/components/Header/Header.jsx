import './Header.css'
import logo from '../../../src/assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className="header">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/order">Order</a>
                <a href="/order_review">Order Review</a>
                <a href="/manage_inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;