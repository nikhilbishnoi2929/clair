import React from 'react'
import icon_dot from '../assets/image/svg/icon-park_dot.svg'
import Tokenomics_img from '../assets/image/png/tokenomics_img.png'
import circle_img from '../assets/image/svg/circle_img.svg'
import plus from '../assets/image/svg/plus.svg'
import circle_img_2 from '../assets/image/svg/circle_img_2.svg'
import eppips_4 from '../assets/image/svg/ellips-4.svg'
const Tokenomics = () => {
    return (
        <section className=' tokenomics_bg position-relative' id="section2" >
            <div className='  container max-w-1140 pt-104 pb-98'>
                <div className='row z-3 pb-60 flex-column-reverse flex-lg-row'>
                    <div className='col-lg-6 col-12 d-flex align-items-center pt__30 justify-content-lg-start justify-content-center' data-aos="fade-up-right">
                        <div className=' d-flex flex-column text-center text-lg-start'>
                            <h3 className=' fw-600 line-57 mb-0 manrope fs-4xl white-1 '>Tokenomics</h3>
                            <div className=' d-flex  align-items-center gap-16 pt-20 justify-content-center justify-content-lg-start'>
                                <h3 className=' manrope mb-0 fw-400 line-400 fs-xl para-color'>Baby Sinclair</h3>
                                <button className='  yellow fw-400 line-400  btn_clair fs-xl'>$Clair</button>
                            </div>
                            <h3 className=' manrope fw-500 fs-md line-24 mb-0 para-color pt-24'>Total Tokens</h3>
                            <h5 className=' manrope fw-600 fs-3xl mb-0 yellow line-48 pt_4'>100,000,000,000</h5>
                            <div className=' d-flex align-items-center gap-12 pt-32'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>1%  </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Presale</h3>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-12 pt-12'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>3%  </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Marketing</h3>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-12 pt-12'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>5%  </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Team - locked for 24 months</h3>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-12 pt-12'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>10%  </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Investors - locked for 24 months</h3>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-12 pt-12'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>21% </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Exchange listings & liquidity</h3>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-12 pt-12'>
                                <img src={icon_dot} alt="icon_dot" />
                                <div className=' d-flex justify-content-end gap-12 align-items-end'>
                                    <h2 className=' manrope fw-500 fs-xl line-36 mb-0 para-color'>60%  </h2>
                                    <h3 className='manrope fw-400 fs-md line-24 mb-0 para-color'>Rewards and burns</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-lg-6 col-12 justify-content-lg-end justify-content-center d-flex '  data-aos="fade-up-left">
                        <img className=' w-100 max-w-491' src={Tokenomics_img} alt="Tokenomics_img" />
                    </div>
                </div>
                <div className='token_box z-3 mx-auto  mt-4 mt-sm-0  flex-md-nowrap flex-wrap w-100 d-flex align-items-center justify-content-md-between justify-content-center text-center text-md-start gap-20 ' data-aos="flip-left">

                    <div className='z-3 gap-20 d-flex'>
                        <div className='circle_img  z-3 d-flex justify-content-center align-items-center'>
                            <img src={circle_img} className=' z-3 ' alt="circle_img" />
                        </div>
                        <img src={plus} className='w-20 z-3' alt="plus" />
                        <div className='circle_img z-3  d-flex justify-content-center align-items-center'>
                            <img className=' z-3 ' src={circle_img_2} alt="circle_img" />
                        </div>
                    </div>
                    <div className=' d-flex z-3 flex-column'>
                        <h3 className=' manrope z-3 fw-600 mb-0 fs-lg line-30 white-1 '>Baby Sinclair Stands Strong with the Shiba Inu Community</h3>
                        <p className=' manrope z-3 mb-0 fw-400 fs-md line-24 para-color  pt-10'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>

                    </div>
                </div>


            </div>
            <div className=' position-absolute eppips_4 z-0'>
                <img src={eppips_4} alt="eppips_4" />
            </div>
            <div className=' linear_gradiant position-absolute z-0'></div>
            <div className='linear_gradiant_2 position-absolute z-0'>
                
            </div>
        </section>
    )
}

export default Tokenomics