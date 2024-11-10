
import React, { createContext, useState } from 'react'

const SellerC = createContext();

const SellerContext = ({children}) => {
    const [sellerDetails, setSellerDetails] = useState(null);
  return (
    <div>

    <SellerC.Provider value={{sellerDetails, setSellerDetails}}>
        {children}
    </SellerC.Provider>
      
    </div>
  )
}

export default SellerContext;
export { SellerC }
