import React from 'react'

import { PSDNukJan } from '../../../assets/img'
import { FiSearch } from "react-icons/fi"

import cls from './index.module.css'

const Header = () => {
  return (
    <div className={cls.container}>
        <div className={cls.title}>
            <h1>Get Your Best Cosmetic Products Here</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            <div>
                <input type="text" placeholder='Search...' /> 
                <button><FiSearch /></button>
            </div>
            <button>Shop Now</button>
        </div>
        <div>
            <img width="100%" src={PSDNukJan} alt="PSDNukJan" />
        </div>
    </div>
  )
}

export default Header
