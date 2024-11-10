import React, { useContext, useEffect, useState } from 'react'
// import { ContextData} from '../Context';
import './normalHome.css'
// import Card from '../Components/Card_med';
// import Category from '../Components/Category';
import axios from 'axios';
import Card from './Card_med';
import Category from './Category';
import { ContextData } from '../Context';



const NormalHome = () => {
  return (
    <div>
        <div className='image' style={{position: 'relative'}}>
        {/* <img src='/pexels-pixabay-208512.jpg' style={{width: '100%', height: "80vh"}}></img> */}
        {/* <img src='/narasimha2.jpg' style={{width: '100%', height: "80vh"}}></img> */}

        <div className="hero-section">
      <div className="content">
        <h5 className="subheading">WE'RE THE PHARMEDIC</h5>
        <h1 className="main-heading">Delivering Wellness with Every Prescription</h1>
        <p className="description">
          Euismod sapien eros mus imperdiet commodo tellus luctus. Eleifend
          ultrices primis litora turpis nisl donec euismod habitant erat dolor.
        </p>
        <button className="btn">Discover More</button>
      </div>
    </div>
        {/* <div className='text' style={{color: "white", fontWeight: 700, fontSize: '2rem', position: "absolute", textAlign: 'center', bottom:'40vh', left: '30vw'}}>Buy Medicines and Essentials</div> */}
        </div>

        <div className='trending'>
            <div className='compo'>
                Top Deals 
            </div>
            <hr className='line_below'></hr>
            <div className='trending_medinces'>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    image='/product-photo-37909522022105225.webp'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    // image='/Parcetamol.jpg'
                    image='/product-photo-37909522022105225.webp'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    // image='/Parcetamol.jpg'
                    image='/product-photo-37909522022105225.webp'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>
            </div>
        </div>


        <div className='trending'>
            <div className='compo'>
                Shop By Category
            </div>

            
            <hr className='line_below'></hr>
            <div className='trending_medinces'>

                <div style={{margin: '1rem'}} className='item'>
                    {/* <Card 
                    image='/Parcetamol.jpg'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    /> */}
                    <Category 
                        image={'/product-photo-37909522022105225.webp'}
                        content={"Personal Care Products"}
                    />

                </div>

                <div style={{margin: '1rem'}} className='item'>
                    {/* <Card 
                    image='/Parcetamol.jpg'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    /> */}
                    <Category 
                        image={'/istockphoto-526495161-612x612.jpg'}
                        content={"Baby Care Products"}
                    />
                </div>

                <div style={{margin: '1rem'}} className='item'>
                    {/* <Card 
                    image='/Parcetamol.jpg'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    /> */}
                    
                    <Category 
                        image={'/istockphoto-1386276499-612x612.jpg'}
                        content={"Home Medical Products"}
                    />
                </div>
            </div>
        </div>


        <div className='trending'>
            <div className='compo'>
                Shop By Health Condition
            </div>
            <hr className='line_below'></hr>
            <div className='trending_medinces'>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    image='/Parcetamol1.jpg'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    image='/Parcetamol1.jpg'
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>

                <div style={{margin: '1rem'}} className='item'>
                    <Card 
                    image='/Parcetamol1.jpg'
                    
                    price='&#8377;200' 
                    content='Parcetamol 500 Tablets'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NormalHome
