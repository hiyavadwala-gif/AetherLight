import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About'
import Product from '../Components/Product'
import Conact from '../Components/Conact'
import Search from '../Components/Search'
import Help from '../Components/Help'
import Navebar_one from '../Components/Navebar_one'


function Main_Rotuer() {
  return (
    <Routes>
        <Route path = "/" element ={<Navebar_one/>}>
        <Route path='About' element= {<About/>}/>
        <Route path='Product' element ={<Product/>}/>
        <Route path='Conact' element ={<Conact/>}/>
        <Route path='Help' element ={<Help/>}/>
        <Route path='Seacrh' element ={<Search/>}/>
    
        </Route>
    </Routes>
  )
}

export default Main_Rotuer