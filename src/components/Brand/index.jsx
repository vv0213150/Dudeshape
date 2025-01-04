import React from 'react'

import { BsMicrosoft } from "react-icons/bs"
import { TbBrandWalmart } from "react-icons/tb"
import { FaFedex, FaHubspot  } from "react-icons/fa"
import { BiLogoAirbnb } from "react-icons/bi"

import cls from './index.module.css'

const Brand = () => {
  return (
    <>
        <div className={cls.line}></div>
        <div className={cls.icons}>
            <h4><BiLogoAirbnb />airbnb </h4>
            <h4>HubSp<FaHubspot />t</h4>
            <h4>Google</h4>
            <h4><BsMicrosoft />Microsoft</h4>
            <h4>Walmart <TbBrandWalmart /></h4>
            <h1><FaFedex /></h1>
        </div>
        <div className={cls.lineTwo}></div>
    </>
  )
}

export default Brand
