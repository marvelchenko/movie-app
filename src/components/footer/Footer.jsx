import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import playStore from '../../assets/playStore.svg'
import appStore from '../../assets/appStore.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="custom-container text-white w-full ">
            <div className="box p-20 gap-4 md:gap-0 flex flex-col md:flex-row justify-between bg-700">
               <div>
               <ul className='flex flex-col md:flex-row gap-5 mb-10'>
                    <li>Terms of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                </ul>
                <p className="text-sm">
                &copy; {new Date().getFullYear()} Developed by <span className="font-semibold text-amber-500">Marvelous Egor</span>. All rights reserved.
                </p>
               </div>
               <div>
                    <h3 className='mb-2 md:mb-10'>Follow Us</h3>
                    <div className="flex gap-5">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
           </div>
                </div>

                <div>
                    <h3 className='mb-2 md:mb-10'>Streamit App</h3>
                    <div className="flex gap-5">
            <div className='flex items-center gap-2'>
            <img src={appStore} alt="" className='h-10' />
            <p className='font-semibold'>App Store</p>
            </div>
           <div className='flex items-center gap-2'>
           <img src={playStore} alt="" className='h-10' />
           <p className='font-semibold'>Google Play Store</p>
           </div>
           </div>
                </div>
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default Footer
