import React from 'react'
import lastellips from '../assets/image/svg/lastsection_ellips.svg'
const Lastsection = () => {
    return (
        <footer className=' footer_bg  mt--2  position-relative'>
            <div className=' container max-w-1140 pt-120 pb-4'>
                <div className=' d-flex justify-content-center z-3 '>
                    <div className=' d-flex align-items-center z-3 flex-column'>
                        <h3 className=' manrope z-3 mb-0 line-72 fw-600 fs-5xl yellow  cursor'>$CLAIR</h3>
                        <p className=' fw-400 fs-md line-24 mb-0 pt-20  para-color-3 manrope text-center max-w-626'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                            and Baby Sinclair is wielding it with style. The bad players better watch out;
                            the crypto defender is here, armed with memes and ready to act.</p>
                        <ul className=' z-3 mb-0 ps-0 d-flex gap-32 flex-wrap text-center justify-content-center pt-50'>
                            <li>
                                <a href="#section1" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>About</a>
                            </li>
                            <li>
                                <a href="#section2" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>Tokenomics</a>
                            </li>
                            <li>
                                <a href="#section3" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>Audit</a>
                            </li>
                            <li>
                                <a href="#section4" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>Roadmap</a>
                            </li>
                            <li>
                                <a href="#section5" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>White Paper</a>
                            </li>
                            <li>
                                <a href="#section6" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>Privacy   </a>
                            </li>
                            <li>
                                <a href="#section7" className=' manrope under_hover fw-500 fs-md line-24  para-color-2'>Cookies</a>
                            </li>
                            <li>
                                <a href="#section8" className=' manrope  under_hover fw-500 fs-md line-24  para-color-2'>Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=' z-3 last_line mt-40'></div>
              
            </div>
            <div className=' footer_liner position-absolute'></div>
            <div className=' position-absolute last_ellips'>
                <img src={lastellips} alt="lastellips" />
            </div>
            <div className=' footer_liner_2 position-absolute'></div>
        </footer>
    )
}

export default Lastsection