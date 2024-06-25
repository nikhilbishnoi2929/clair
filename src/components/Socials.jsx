import React from 'react'
import twitter from '../assets/image/svg/twitter-alt.svg'
import discord from '../assets/image/svg/discord.svg'
import telegram from '../assets/image/svg/telegram.svg'
import box_ellips from '../assets/image/svg/solical_box_ellips.svg'
import box_ellips_2 from '../assets/image/svg/box_social_ellps_2.svg'

const Socials = () => {
  return (
  <section className=' bg-black mt--2'>
    <div className=' container max-w-1140 pt-124 pb-34'>'
    <div className=' social_box mx-auto position-relative '>
        <div className=' d-flex justify-content-center '>
            <div className='z-3 d-flex flex-column align-items-center'>
                <h3 className=' white-1 mb-0 manrope fw-500  fs-4xl line-57'>Our <span className=' yellow'> Socials</span></h3>
                <p className=' fs-md mb-0 para-color-3 manrope fw-400 line-24 pt-16 '>Join us on social media for exclusive giveaways and stay connected!</p>
                <p className=' fs-lg mb-0 yellow manrope fw-500 line-24 pt-32'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                <div className=' d-flex z-3 gap-16 pt-32'>
                    <div className='z-3 cirlce_media d-flex justify-content-center align-items-center'>
                        <a href="https://discord.com/" target='blank_'><img src={discord} alt="discord" /></a>
                    </div>
                    <div className='z-3 cirlce_media d-flex justify-content-center align-items-center'>
                        <a href="https://x.com/?lang=en" target='blank_'><img src={twitter} alt="discord" /></a>
                    </div>
                    <div className='z-3 cirlce_media d-flex justify-content-center align-items-center'>
                        <a href="https://telegram.org/" target='blank_'><img src={telegram} alt="discord" /></a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className=' z-2 position-absolute box_ellips'>
                <img src={box_ellips} alt="box_ellips" />
            </div>
            <div className=' z-2 position-absolute box_ellips_2'>
                <img src={box_ellips_2} alt="box_ellips" />
            </div>
    </div>
    </div>
  </section>
  )
}

export default Socials