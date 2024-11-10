import React, { useContext, useEffect, useState } from 'react'
import { ContextData} from '../Context';
import './home.css'
import Card from '../Components/Card_med';
import Category from '../Components/Category';
import axios from 'axios';
import NormalHome from '../Components/NormalHome';
import SearchedItems from '../Components/SearchedItems';
import { SearchContextCreate } from '../SearchContext';
import { useSelector } from 'react-redux';
import NotificationToast from '../Components/NotificationToast';
// import { useHeQuery, useSearchItemsMutation } from '../app/getProducts';


const Home = () => {
    
    const { userData } = useContext(ContextData);
    // const [search, setSearchItem] = useState('');
    const { searchItems, setSearchItems } = useContext(SearchContextCreate);
    const { searchItem, setSearchItem } = useContext(SearchContextCreate);
    const searchQuery = useSelector((state) => state.searchQuery.searchQuery)


    // const [searchItems, { data: products, error, isLoading }] = useSearchItemsMutation();
    // const add = useSearchItemsMutation();
    // console.log(add)
    // const searchQuery = useSelector((state) => state.searchQuery.searchQuery)
    // searchItems({searchItem: searchQuery})


    // const {data, isLoading1} = useHeQuery();
    // console.log(useHeQuery());
    // console.log(data);
    // useEffect(() => {

    //     const storedSearchItems = localStorage.getItem('searchItems');
    //     if (storedSearchItems !== JSON.stringify(searchItems)) {
    //         setSearchItems(JSON.parse(storedSearchItems));
    //     }

        
        
    // })
    
    // useEffect(() => {
    //     const callAllMedicines = async () => {

    //         console.log(searchItem)
    //         const MedicinesList = await axios('/allMedicines', {searchItem: searchItem})
    //         searchItems(MedicinesList)
    //     }
        
        
    //     callAllMedicines();
    // }, [searchItem])
    // console.log(searchQuery)
    
  return (
    <>


        
        {/* { !searchItems && <NormalHome />} */}
        { searchQuery === '' && <NormalHome />}
        { searchQuery !== '' && <SearchedItems />}
        
        {/* {searchItems && <SearchedItems />} */}
      

      
        



    
        
    </>
  )
}

export default Home
