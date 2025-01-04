import React from 'react'


import cls from './index.module.css'

const PopularProduct = (props) => {
  return (
    <div className={cls.info}>
        <img width={"100%"} src={props.images} />
        <div className={cls.pdn}>
            <h2>{props.titleProduct}</h2>
            <h4>{props.description}</h4>
            <div className={cls.choice}>
                <div className={cls.btns}>
                    <button className={cls.button2}>{props.btn}</button>
                    <button className={cls.button1}>{props.btnTwo}</button>
                </div>
                <h3>{props.price}</h3>
            </div>
        </div>
    </div>
  )
}

export default PopularProduct
