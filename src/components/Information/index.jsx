import React from 'react'

import cls from './index.module.css'

const Info = () => {
  return (
    <div className={cls.main}>
        <div>
            <h1>100%</h1>
            <div className={cls.line}></div>
            <p>Organic Products</p>
        </div>
        <div>
            <h1>2M+</h1>
            <div className={cls.line}></div>
            <p>Yearly Sales</p>
        </div>
        <div>
            <h1>1.9M+</h1>
            <div className={cls.line}></div>
            <p>Happy Customar</p>
        </div>
    </div>  
  )
}

export default Info
