import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import { ContextData } from '../Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { SearchContextCreate } from '../SearchContext';
import { Badge } from 'antd';
import { getSearchQuery } from '../app/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useUserDetailsQuery } from '../app/userApiSlice';
import { getCartCount, getUsername, clearDetails } from '../app/userSlice';

export default function Header() {
    // const { userData, setUserData } = useContext(ContextData);
    // const { searchItems, setSearchItems } = useContext(SearchContextCreate);
    // const { searchItem, setSearchItem } = useContext(SearchContextCreate);
    const [cartCount, setCartCount] = useState(0);
    const [searchItem, setSearchItem] = useState("");
    const searchQuery = useSelector((state) => state.searchQuery.searchQuery)

    useEffect(() => {
        setSearchItem(searchQuery)
        // console.log("triggered")
        
    }, [])
    console.log(searchItem)
    
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, isError, isLoading, error } = useUserDetailsQuery();

    
    useEffect(() => {
        if(data) {
            // console.log('User data:', data);
            dispatch(getUsername(data.username));
            dispatch(getCartCount(data.cart.length))

            
        }
    }, [data]);


    const username = useSelector((state) => state.userDetails.username);
    const cartCountValue = useSelector((state) => state.userDetails.cartCount);
    console.log(cartCountValue)
    

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(getSearchQuery({ name: searchItem }));
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    };

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const logout = () => {
        // localStorage.removeItem('searchItems');
        dispatch(getSearchQuery({ name: "" }));
        dispatch(clearDetails());
        navigate('/login');
    };

    const handleLogoClick = () => {
        // setSearchItems(null);
        setSearchItem("")
        dispatch(getSearchQuery({ name: "" }));
        // localStorage.removeItem('searchItems');
        
        navigate('/'); 
    };

    if(isError) {
        if(error.data.message === "Invalid JWT") {
            dispatch(getSearchQuery({ name: "" }));
          navigate('/login')
        //   console.log("Login")
        }
        return <p>{error.data.message}</p>
      }
    
    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <nav className="header-nav">
            <div>
                <Link to='/' className="header-logo-link" style={{ textDecoration: "none" }}>
                    <h1 onClick={handleLogoClick} className="header-logo">Logo</h1>
                </Link>
            </div>
            <div className="header-search-container">
                <form onSubmit={onSubmit} method='POST' className="header-search-form">
                    <input 
                        type='text' 
                        className="header-search-input"
                        placeholder='Search' 
                        // value={searchItem} 
                        value={searchItem} 
                        onChange={(e) => {setSearchItem(e.target.value) }} 
                    />
                    <button type='submit' className="header-search-button">Search</button>
                </form>
            </div>
            <div className='header-cart-profile'>
                <div className='header-cart'>
                    <Link to='/cart'>
                        <ShoppingCartIcon fontSize='large' style={{ color: "black" }} />
                    </Link>
                    {/* <Badge count={cartCount} className="header-cart-badge" style={{ bottom: "2.3vw", right: "1vw" }} /> */}
                    <Badge count={cartCountValue} className="header-cart-badge" style={{ bottom: "-1.2vw", right: "1vw" }} />
                </div>
                <div className='header-profile'>
                    {username && (
                        <FaUser 
                            onClick={toggleDropdown} 
                            className="header-profile-icon"
                            style={{ transform: "scale(2)", position: 'relative', top: '-0.3rem' }} 
                        />
                    )}
                    {dropdownVisible && (
                        <div className={`header-dropdown-menu ${dropdownVisible ? 'visible' : ''}`}>
                            <ul>
                                <Link to='/userDashboard' style={{ textDecoration: "none" }}>
                                    <li>Profile</li>
                                </Link>
                                <li onClick={logout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
