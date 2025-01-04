import React from 'react'

import { LiaStarSolid, LiaStarHalfAltSolid } from "react-icons/lia"
import { RiDoubleQuotesL, RiDoubleQuotesR  } from "react-icons/ri"

import { woman } from '../../assets/img'

import cls from './index.module.css'


const Comment = () => {
  return (
    <div className={cls.main}>   
        <div>
            <img width={"100%"} src={woman} alt="woman" />
        </div>
        <div>
            <h1>Amazing Cosmetic</h1>
            <div className={cls.icons}><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarHalfAltSolid /></div>
            <p><span><RiDoubleQuotesL /></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book<span><RiDoubleQuotesR /></span></p>
            <h2>Rusmin Islam</h2>
            <p>Designer</p>
        </div>
    </div>      
  )
}

export default Comment
