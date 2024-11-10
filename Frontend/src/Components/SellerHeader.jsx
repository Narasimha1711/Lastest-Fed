import React, { useContext, useEffect, useState } from 'react';
import './sellerheader.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
import { SearchContextCreate } from '../SearchContext';
import { Badge } from 'antd';
import SellerContext, { SellerContextData } from '../SellerContext';



export default function SellerHeader() {
    const { sellerData, setSellerData } = useContext(SellerContextData);

    

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const UserDetails = async () => {
            try {
                const response = await axios.get('/seller-info');
                const data = response.data; 
                setSellerData(data);
                // console.log(data)
                // setCartCount(data.cart.length);
            } catch (err) {
                console.log(err);
                if (err.response.data.path === "/login") {
                    navigate('/sellerLogin');
                }
            }
        };
        UserDetails();
    }, []);


    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const logout = async () => {
        const response = await axios.post('/sellerLogout');
        localStorage.removeItem('sellerDetails');

        navigate('/sellerLogin');
    };

    const handleLogoClick = () => {
        setSearchItems(null);
        setSearchItem('');
        localStorage.removeItem('searchItems');
        navigate('/'); 
    };

    return (
        <>
            <nav>
                <div>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <h1 onClick={handleLogoClick} style={{ color: "black" }}>Logo</h1>
                    </Link>
                </div>
                <div className="search-container">
                
                </div>
                <div className='cart_profile'>
                    {/* <div className='cart'>
                        <Link to='/cart'>
                            <ShoppingCartIcon fontSize='large' style={{ color: "black" }} />
                        </Link>
                        <Badge count={cartCount} style={{ bottom: "2.3vw", right: "1vw" }} />
                    </div> */}
                    <div className='profile'>
                
                        {sellerData?.shopName && (
                            <FaUser 
                                onClick={toggleDropdown} 
                                style={{ transform: "scale(2)", position: 'relative', top: '-0.3rem' }} 
                            />
                        )}
                        {dropdownVisible && (
                            <div className={`dropdown-menu ${dropdownVisible ? 'visible' : ''}`}>
                                <ul>
                                    <li>Profile</li>
                                    <li onClick={logout}>Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
