import React, { useState } from 'react'
import ellips_3 from '../assets/image/svg/ellips-3.svg'
const SmartContract = () => {
    const [copybtn, setName] = useState(false)
    return (
        <section className='bg_img_3 mt--2 position-relative '>
            <div className=' container max-w-1140 px-152'>
                <div className=' d-flex justify-content-center  ' data-aos="flip-right">
                    <div className=' d-flex flex-column  align-items-center text-center'>
                        <h3 className=' mb-0  manrope  fw-600 line-57 fs-4xl white-1 '> <span className='yellow'> $CLAIR</span> Smart Contract Address</h3>
                        <div className=' d-flex w-100 justify-content-center pt-24 '>
                            <div className='input_box w-100'>
                                <input type="text" placeholder='0xFD1929755F73f974648daD00ab491a7C44a00eeD' className=' w-100 manrope input_copy fw-400 fs-md line-24 para-color' />

                            </div>
                            <button className=' manrope fw-700 fs-md d-none d-md-block line-24 black btn_copy' onClick={() => setName("copied")}>    {copybtn ? "copied " : "copy"}</button>

                        </div>
                        <button className=' manrope fw-700 fs-md mt-3 d-block d-md-none line-24 black btn_copy' onClick={() => setName("copied")}>    {copybtn ? "copied " : "copy"}</button>

                        <p className=' manrope  fw-400 fs-md line-24 mb-0   max-w-806 pt-32 para-color-3'>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
                    </div>
                </div>

            </div> 
            <div className=' position-absolute ellips-3 z-2'>
                <img src={ellips_3} alt="ellips-3" />
            </div>
        </section>
    )
}

export default SmartContract