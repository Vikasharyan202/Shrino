import AccountCircleIcon from '@mui/icons-material/AccountCircle';  
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className="header-cont">
        <p className="logo">SHRINO</p>
        <div className='search-bar'>
            <span><SearchIcon /></span>
            <input type="text" placeholder="Search product" />
        </div>        
        <div className='account'>
            <span><AccountCircleIcon /></span>
            <p>Account <KeyboardArrowDownIcon /></p>
        </div>
        <div className='cart'>
            <span><ShoppingCartCheckoutIcon /></span>
            <span>Cart</span>
        </div>
    </div>
  )
}

export default Header;