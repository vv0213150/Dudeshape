import React from 'react'
import Nav from './components/layouts/Nav'
import Header from './components/layouts/Header'

import cls from './index.module.css'
import Brand from './components/Brand'
import PopularProduct from './components/PorularProduct'

import { HiArrowRight } from "react-icons/hi"
import { 
  pumpBottle,
  jar,
} from './assets/img'
import Info from './components/Information'
import Purchase from './components/Purchase'
import Comment from './components/Comment'
import Footer from './components/layouts/Footer/infex'

const Data = [
  {
    header: 'product picture',
    images: pumpBottle,
    titleProduct: 'Cosmetic products',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    btn: 'Buy Now',
    btnTwo: 'Add To Cart',
    price: '$120'
  },
  {
    header: 'product picture',
    images: jar,
    titleProduct: 'Cosmetic products',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    btn: 'Buy Now',
    btnTwo: 'Add To Cart',
    price: '$120'
  }
]

const App = () => {
  return (
    <>
      <div className={cls.main}>
        <Nav/>
        <Header />
        <Brand />
        <div>
          <div className={cls.title}>
            <div>
              <h1>Our Porular Product</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div className={cls.btn}>
              <button>Discover Our Products</button><HiArrowRight />
            </div>
          </div>
          <div className={cls.container}>
            {Data.map((item) => (
              <PopularProduct 
              images={item.images}
              titleProduct={item.titleProduct}
              description={item.description}
              btn={item.btn}
              btnTwo={item.btnTwo}
              price={item.price}
              />
            ))}
          </div>
        </div>
        <Info />
        <Purchase />
        <Comment />
      </div>
      <div className={cls.end}>
        <Footer/>
      </div>
    </>
  )
}

export default App
