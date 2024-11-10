import React from 'react'
import './noProducts.css'
import { FaSearch } from 'react-icons/fa'; // Optional: Search icon for illustration


const NoProducts = () => {
  return (
    <div>
      <div className="no-products">
                    <FaSearch size={50} color="#007BFF" />
                    <h1>No Products Found</h1>
                    <p>Try adjusting your search criteria or check out our other products!</p>
                </div>
    </div>
  )
}

export default NoProducts
