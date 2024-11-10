import React, { createContext, useState } from "react";


const SellerContextData = createContext({});

 
export default function SellerContext({children}) {

    
    const [sellerData, setSellerData] = useState(null);
    
    return (
        <>
        <SellerContextData.Provider value={{ sellerData, setSellerData }}>

            {children}
        </SellerContextData.Provider>
        </>
    )
}

export { SellerContextData };
