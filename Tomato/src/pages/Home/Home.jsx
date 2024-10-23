import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import {useState} from "react"
import Exploremenu from '../../components/ExploreMenu/Exploremenu';
import Fooddisplay from '../../components/FoodDisplay/Fooddisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {
  const[category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home