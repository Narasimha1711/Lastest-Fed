import React, { useEffect, useState } from 'react';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useAddToCartMutation, useCheckoutCartMutation, useGetCartItemsQuery } from '../app/addCartSlice';
import { useNavigate } from 'react-router-dom';
import NotificationToast from '../Components/NotificationToast';
import { toast } from 'react-toastify';
import { clearCart } from '../app/userSlice';
import { useDispatch } from 'react-redux';



function CartPage() {

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch()
  
  const [cartItems, setCartItems] = useState([]);
  const [stockArray, setStockArray] = useState([]);
  const navigate = useNavigate();

  // const { data: mess, isError, error, isLoading } = useCheckoutCartQuery();
  const [checkoutFun, { data: mess, isError1, error1, isLoading1 }] = useCheckoutCartMutation(undefined, {refetchOnMountOrArgChange: true});

  const { data, isError, error, isLoading } = useGetCartItemsQuery(undefined, {refetchOnMountOrArgChange: true, });
  // let cartItems = []
  // console.log(error)

  // let stockArray = [];
  useEffect(() => {
    if(data) {
      // cartItems = data.items
      setCartItems(data.items)
      // console.log(data)
      setStockArray(data.itemsCount)
      // console.log(data.itemsCount)
      
    }
  }, [data])
  // console.log(stockArray)

  useEffect(() => {
    if(mess) {
      // setNotificationMessage("Loading");
      //   setShowNotification(true);
      //   setType("loading");
      const id = toast.loading("Please wait...")
      console.log(mess)
      if(mess.message === "not Accept") {
        // const names = mess.items
        // let namess = '';
        // for(let i = 0; i < names.length; i++) {
        //   namess += names[i];
        //   namess += ", "
        // }
        // console.log("yes")
        const items = mess.items.join(", ");
        const warningMessage = `${items} are not in stock. Please remove these items to proceed to checkout.`;
        // namess += "These items are not in Stock. You can delete these items and Proceed to Checkout"
        toast.update(id, {
          render: warningMessage,
          type: "warning",
          isLoading: false,
          autoClose: 5000, // Closes the toast after 5 seconds
        });

      }
      else if(mess.message === "Order Successfully Placed") {
        toast.update(id, {
          render: "Order Successfully Placed!",
          type: "success",
          isLoading: false,
          autoClose: 3000, // Closes the toast after 3 seconds
        });

        dispatch(clearCart())
        setCartItems([])
        // setNotificationMessage("Order Successfully Placed");
        // setShowNotification(true);
        // setType("success");
      }
      else {

      }
      
    }
  }, [mess])


  const updateQuantity = (id, newQuantity, index) => {
    setCartItems(items =>
      items.map(item =>
        item._id === id ? { ...item, count: Math.min(Math.max(0, newQuantity), Math.min(5, stockArray[index])) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item._id !== id));
  };

  const calculateTotals = () => {
    return cartItems.reduce((acc, item) => {
      const itemOriginalTotal = item.price * item.count;
      const itemDiscountedTotal = item.price * item.count;
      return {
        originalTotal: acc.originalTotal + itemOriginalTotal,
        discountedTotal: acc.discountedTotal + itemDiscountedTotal,
      };
    }, { originalTotal: 0, discountedTotal: 0 });
  };

  const { originalTotal, discountedTotal } = calculateTotals();
  const totalSaved = originalTotal - discountedTotal;

  const checkout = () => {
    // console.log(cartItems)
    checkoutFun(cartItems);

    
  }

  if(isError) {
    if(error.data.message === "Session has expired. Login in.") {
      const id = toast.loading("Please wait...")
      toast.update(id, {
        render: error.data.message,
        type: "error",
        isLoading: false,
        autoClose: 3000, // Closes the toast after 3 seconds
      });
      navigate('/login')
    }
    return <p>{error.data.message}</p>
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    {showNotification && <NotificationToast message={notificationMessage} type={type} />}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="border-b border-gray-200">
                {cartItems.map((item, index) => (
                  <div key={item._id} className="flex items-center p-6 hover:bg-gray-50">
                    <img 
                      // src={item.image} 
                      src={`http://localhost:9001/uploads/${item.image}`} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      
                      <div className="mt-1 flex items-center">
                        <span className="text-lg font-semibold text-gray-900">
                          ${item.price}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${item.price}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center">
                        {stockArray[index] === 0 ? (
                          <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                        ) : (
                          <span className="text-green-600 text-sm font-medium">
                            {stockArray[index] < 5 ? `Only ${stockArray[index]} left` : 'In Stock'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item._id, item.count - 1, index)}
                          disabled={item.count === 0}
                          className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-gray-900">{item.count}</span>
                        <button
                          onClick={() => updateQuantity(item._id, item.count + 1, index)}
                          disabled={item.count >= Math.min(5, stockArray[index])}
                          className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item._id)}
                        className="ml-6 text-red-500 hover:text-red-600"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-b-lg">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${originalTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>${totalSaved.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${discountedTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button onClick={checkout}
                  className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;








// import React, { useEffect, useState, useRef } from 'react';
// import './cart.css';
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';

// const Cart = () => {
//   const toast = useRef(null);

//   const showSuccess = () => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: 'All items in Cart Booked Successfully', life: 3000 });
//   };

//   const bookAllCart = async () => {
//     try {
//       const response = await fetch('http://localhost:9001/bookAllCart', {
//         method: 'GET',
//         credentials: 'include' // To include cookies, similar to axios defaults
//       });

//       if (response.ok) {
//         showSuccess();
//       } else {
//         const errorData = await response.json();
//         console.error('Error booking cart:', errorData);
//       }
//     } catch (err) {
//       console.error('Fetch error:', err);
//     }
//   };

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch('http://localhost:9001/addToCart', {
//           method: 'GET',
//           credentials: 'include' // To include cookies
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setCartItems(data.items);
//         } else {
//           console.error('Error fetching cart items:', response.statusText);
//         }
//       } catch (err) {
//         console.log('Fetch error:', err);
//       }
//     };
//     fetchCartItems();
//   }, []);

//   // Calculate total price outside the rendering loop
//   const totalPrice = cartItems.reduce((acc, medicine) => acc + medicine.price, 0);

//   return (
//     <>
//       <div className="cart-page">
//         <div className="cart-header">
//           <h2>Your Cart</h2>
//           <p>{cartItems.length === 0 ? 'Your cart is empty.' : `You have ${cartItems.length} item(s) in your cart.`}</p>
//         </div>

//         <div className="cart-container">
//           {cartItems.length === 0 ? (
//             <div className="empty-cart">
//               <img src="/empty-cart.png" alt="Empty Cart" />
//               <p>Looks like you haven't added anything yet!</p>
//             </div>
//           ) : (
//             <div className="cart-items-list">
//               {cartItems.map((medicine) => (
//                 <div key={medicine._id} className="medicine-card">
//                   <div className="medicine-image">
//                     <img src={`http://localhost:9001/uploads/${medicine.image}`} alt={medicine.name} />
//                   </div>
//                   <div className="medicine-info">
//                     <h2 className="medicine-name">{medicine.name}</h2>
//                     <p className="medicine-description">{medicine.description}</p>
//                     <p className="medicine-seller">Seller: {medicine.seller}</p>
//                     <p className="medicine-price">Price: ₹{medicine.price}</p>
//                     <button className="buy-btn">Buy Now</button>
//                   </div>
//                 </div>
//               ))}
//               {/* Display the total price at the bottom, calculated beforehand */}
//               <div className="cart-summary">
//                 <h3 className="cart-total">Total: ₹{totalPrice.toFixed(2)}</h3>
//                 <button className="checkout-btn" onClick={bookAllCart}>Proceed to Checkout</button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
