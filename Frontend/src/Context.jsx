import { createContext, useState } from "react";


const ContextData = createContext({});

 
export default function Context({children}) {

    
    const [userData, setUserData] = useState(null);
    
    return (
        <>
        <ContextData.Provider value={{ userData, setUserData }}>

            {children}
        </ContextData.Provider>
        </>
    )
}

export { ContextData };
