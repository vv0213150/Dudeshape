import React from 'react'

import { Profile, Buy, BrMenu } from '../../../assets/img'

import cls from './index.module.css'

const Nav = () => {
  return (
    <div className={cls.main}>
        <h1>Dudeshape</h1>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className={cls.icons}>
            <img width="20px" height="20px" src={Profile} alt="Profile" />
            <img width="20px" height="20px" src={Buy} alt="Buy" />
            <img width="20px" height="20px" src={BrMenu} alt="BrMenu" />
        </div>
    </div>
  )
}

export default Nav
