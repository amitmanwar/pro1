import React from 'react'
import { useState } from 'react'
import "./style.css"
import Menu from '../menuAPI'
import Menucard from './Menucard'

const Restu = () => {

    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData)

  return (
    <> 

    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item'>breakfast</button>
            <button className='btn-group__item'>breakfast</button>
            <button className='btn-group__item'>breakfast</button>
            <button className='btn-group__item'>breakfast</button>
        </div>
    </nav>
   <Menucard menuData={menuData}/>
    </>
  )
}

export default Restu