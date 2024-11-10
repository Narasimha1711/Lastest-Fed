import React, { createContext, useState } from 'react'


const SearchContextCreate = createContext({})

const SearchContext = ({children}) => {
    const [searchItems, setSearchItems] = useState(null);
    const [searchItem, setSearchItem] = useState('');
  return (
    <SearchContextCreate.Provider value={{searchItems, setSearchItems, searchItem, setSearchItem}}>
    {children}
    </SearchContextCreate.Provider>
    
  )
}

export default SearchContext
export { SearchContextCreate }
