import React from 'react'

import { cosmetic } from '../../assets/img'

import cls from './index.module.css'

const Purchase = () => {
  return (
    <div className={cls.cosmeticblock}>
        <div>
            <h1>The Perfect Beauty Of You</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button>Shop Now</button>
        </div>
        <div>
            <img width={"100%"} src={cosmetic} alt="cosmetic" />
        </div>
    </div>
  )
}

export default Purchase
