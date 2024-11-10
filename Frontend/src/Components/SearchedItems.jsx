import React, { useEffect } from 'react';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useSearchItemsMutation } from '../app/getProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useAddToCartMutation } from '../app/addCartSlice';
import { useState } from 'react';
import { getCartCount } from '../app/userSlice';
import NotificationToast from './NotificationToast';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getSearchQuery } from '../app/searchSlice';

function SearchedItems() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [type, setType] = useState("");
    
    const [searchItems, { data, error, isLoading }] = useSearchItemsMutation();
    // let products = data || []
    const [products, setProducts] = useState([]);
    
    const searchQuery = useSelector((state) => state.searchQuery.searchQuery)

    const [userLocation, setUserLocation] = useState([]);

    const [addToCartFun, { error: errorCart, isError: isErrorCart, isLoading: isLoadingCart, data: dataCart }] = useAddToCartMutation();


    useEffect(() => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          const userLoc = [latitude, longitude]
          // if(userLoc.length && products.length) {

            setUserLocation(userLoc)
          // }

          
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }


    }, [])


    useEffect(() => {
        // console.log("triggerd")
        if (searchQuery) {

          console.log("Triggering search with query:", searchQuery); 
          searchItems({searchItem: searchQuery})
        }
    }, [searchQuery, searchItems]);




    useEffect(() => {
        if(dataCart) {
          console.log("Triggered once")
            // console.log(dataCart)
            if(dataCart.message === 'Added to cart') {
              dispatch(getCartCount(dataCart.items.length));
              setNotificationMessage("Item added to Cart");
              setShowNotification(true);
              setType("success");
            }

            else if(dataCart.message === 'Item is already present in Cart') {
              
              setNotificationMessage("Item is already present in Cart");
              setShowNotification(true);
              setType("info");
            }
        }
    }, [dataCart])

    useEffect(() => {
      if (data) {
        setProducts(data);
      }
    }, [data]);

    const addToCart = (id) => {
        addToCartFun({id: id})

      }

      
        

  
    const distance = (lat1, lat2, lon1, lon2) => {
      // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.

    // console.log(lat1, lat2, lon1, lon2)
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula 
    let dlon = lon2 - lon1; 
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 
    // for miles
    let r = 6371;

    // calculate the result
    // console.log(c)
    // console.log(c*r)
    return(c * r);
    }

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error loading items. {error.message}</p>;
      if(isErrorCart && errorCart) {
        console.log(errorCart.data)
        const id = toast.loading("Please wait...")
        toast.update(id, {
          render: errorCart.data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000, // Closes the toast after 3 seconds
        });
        dispatch(getSearchQuery({ name: "" }));
        
        navigate('/login')
        
      }

  return (


    
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    {showNotification && <NotificationToast message={notificationMessage} type={type} />}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                {/* <img src={`http://localhost:9001/uploads/${medicine.image}`} alt={medicine.name} /> */}
                <img src={`http://localhost:9001/uploads/${product.image}`} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}%
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600">{product.rating || 2+Math.ceil(Math.random()*3)}</span>
                  </div>
                  <div className="ml-4 text-sm text-gray-500">
                    {/* {product.distance} km away */}
                    {distance(product.location[0], userLocation[0], product.location[1], userLocation[1]).toFixed(2)} km away
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-2xl font-bold text-gray-800">${product.discountedPrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  {/* <span className={`text-sm ${product.count > 0 ? 'text-green-500' : 'text-red-500'} font-semibold`}> */}
                  <span className={`text-sm ${product.count > 0 ? (product.count <= 5 ? 'text-orange-500': 'text-green-500') : 'text-red-500'} font-semibold`}>
                    {/* {product.count > 0 ? 'In Stock' : 'Out of Stock'} */}
                    {/* {product.count > 0 ? (product.count <= 5 ? product.count 'are left' :'In Stock' : 'Out of Stock')} */}
                    {product.count > 0 ? (product.count <= 5 ? `${product.count} are left` : 'In Stock') : 'Out of Stock'}

                  </span>
                  
                  <button onClick={() => addToCart(product._id)}
                    className={`flex items-center px-4 py-2 rounded-full ${
                      product.count > 0
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-gray-300 cursor-not-allowed text-gray-500'
                    } transition-colors duration-300`}
                    disabled={!product.count}
                  >
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default SearchedItems;








// import React, { useContext, useEffect } from 'react';
// import { SearchContextCreate } from '../SearchContext';
// import './searchedItems.css';
// import axios from 'axios';
// import { FaSearch } from 'react-icons/fa'; // Optional: Search icon for illustration
// import NoProducts from './NoProducts';

// const SearchedItems = () => {
//     const { searchItems, setSearchItems } = useContext(SearchContextCreate);

//     useEffect(() => {
//         const storedSearchItems = localStorage.getItem('searchItems');
//         console.log("changing", searchItems)
//         if (storedSearchItems) {
//             setSearchItems(JSON.parse(storedSearchItems));
//             console.log("Heloo", searchItems)
//         }
//     }, [setSearchItems]);

//     const addToCart = async (_id) => {
//         // console.log(_id);
//         const response = await axios.post('/addToCart', { id: _id });

//         // console.log(response.data.message);
//     };

//     const buy = async (_id) => {
//         // console.log(_id);
//         const response = await axios.post('/buy', { id: _id });
//         // console.log(response.data.message);
//     };

//     return (
//         <>
//             {searchItems.length === 0 ? (
//                 <NoProducts />
//             ) : (
//                 <div className="medicines-list">
//                     {searchItems.map((medicine) => (
//                         <div key={medicine._id} className="medicine-card">
//                             <div className="medicine-image">
//                                 <img src={`http://localhost:9001/uploads/${medicine.image}`} alt={medicine.name} />
//                             </div>
//                             <div className="medicine-info">
//                                 <h2 className="medicine-name">{medicine.name}</h2>
//                                 <p className="medicine-description">{medicine.description}</p>
//                                 <p className="medicine-seller">Seller: {medicine.seller}</p>
//                                 <p className="medicine-price">Price: ₹{medicine.price}</p>
//                                 <button className="buy-btn" style={{ fontWeight: '800' }} onClick={() => { buy(medicine._id) }} >Buy Now</button>
//                                 <button className="cart-btn" style={{ fontWeight: '800' }} onClick={() => { addToCart(medicine._id) }}>Add to Cart</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };

// export default SearchedItems;
