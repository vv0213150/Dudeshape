import React from 'react'

import { TiSocialFacebook, TiSocialTwitter  } from "react-icons/ti"
import { PiInstagramLogo } from "react-icons/pi"

import cls from './index.module.css'

const Footer = () => {
  return (
    <>
        <div className={cls.subbtn}>
            <h1>Subscribe to Get Our Letest News</h1>
            <input type="text" placeholder='Enter email' />
            <button>Subscribe</button>
        </div>
        <div className={cls.line}></div>
        <div className={cls.warpFooter}>
            <div>
                <h1>Dudeshape</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
            <div>
                <h2>Quick Link</h2>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <h2>Contact Us</h2>
                <ul>
                    <li>oyasimnaeem@email.com</li>
                    <li>+123456789</li>
                    <div className={cls.icons}>
                        <TiSocialFacebook />
                        <TiSocialTwitter />
                        <PiInstagramLogo />
                    </div>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer
