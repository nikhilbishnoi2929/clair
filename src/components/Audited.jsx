import React from 'react'
import security from '../assets/image/png/security.png'
import position_secu from '../assets/image/png/position_security.png'
import slider_img_1 from '../assets/image/svg/sliderimg1.svg'
import slider_img_2 from '../assets/image/svg/slider_img_2.svg'
import slider_img_3 from '../assets/image/svg/slider_img_3.svg'
import slider_img_4 from '../assets/image/svg/slider_img_4.svg'
import slider_img_5 from '../assets/image/svg/slider_img_5.svg'
import slider_img_6 from '../assets/image/svg/slider_img_6.svg'
import ellips_5 from '../assets/image/svg/ellips-5.svg'
import ellips_6 from '../assets/image/svg/ellisp-6.svg'
const Audited = () => {
  return (
   <section className=' Audited_bg position-relative mt--2  ' id='section3'>
    <div className=' container max-w-1140 pt-158 pb-160  ' >
        <div className='row pb-84' >
            <div className='z-3 col-lg-6 col-12 d-flex justify-content-center ' data-aos="fade-up-right">
               <div className=' position-relative'>
               <img  className=' cursor z-3 '   src={security} alt="security" />
               <div className=' position-absolute position_security'>
                <img className=' black-1' src={position_secu} alt="position_secu" />
               </div>
               </div>
            </div>
            <div className=' col-lg-6 z-3 pt-84 col-12 d-flex align-items-center justify-content-center justify-content-lg-start'data-aos="fade-up-left" >
               <div className=' d-flex flex-column text-center text-lg-start'>
               <h3 className=' fw-400 fs-lg line-30 mb-0 manrope para-color '>Rest easy knowing that $CLAIR is </h3>
                <h4 className=' yellow manrope  fw-600 fs-xxl mb-0 line-48 pt-10'>Fully Audited and 100% Secure.</h4>
                <p className=' fw-400 fs-lg line-30 mb-0 para-color manrope pt-10'>Zero Room for Rug Pulls: Invest with Confidence.</p>
               <div className=' d-flex justify-content-lg-start justify-content-center'>
               <button className=' manrope fw-700 z-3 fs-md line-24 black btn_audit mt-32'>Audit</button>
               </div>
               </div>
            </div>
        </div>
        <div className='tok_line'></div>
        <div className=' row ms-0 pt-49 flex-column-reverse flex-lg-row'>
            <div className=' col-lg-6 pt__30 d-flex justify-content-lg-end justify-content-center'  data-aos="fade-up-right">
                <div className=' d-flex flex-column text-center text-lg-start'>
                <h3  className=' manrope mb-0 fw-600 white-1 z-3 line-48 fs-xxl '>Listing on  <span className='yellow'>Major Exchanges </span></h3>
                <p className=' mb-0  manrope fs-lg pt-16 line-30 para-color max-w-475'> Baby Sinclair’s Team is in action to secure the  <span className='yellow'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.</p>
      
                </div>
                      </div>
            <div className='col-lg-6 d-flex  justify-content-lg-end justify-content-center' data-aos="fade-up-left">
                <div className='slider_box    pb-25'>
                    <div className='d-flex z-3    gap-32 overflow-x-scroll '>
                    <img className=' cursor image_p' src={slider_img_1} alt="slider_img_1" />
                    <img className=' cursor image_p'  src={slider_img_2} alt="slider_img_1" />
                    <img className=' cursor image_p'  src={slider_img_3} alt="slider_img_1" />
                    <img className=' cursor image_p'  src={slider_img_4} alt="slider_img_1" />
                    <img  className=' cursor image_p'  src={slider_img_5} alt="slider_img_1" />
                    <img  className=' cursor image_p'  src={slider_img_6} alt="slider_img_1" />
                    </div>
                    <div className=' d-flex  mt-25 gap-16'>
                    <div className=' first_line'></div>
                    <div className=' second_line'></div>
                    <div className=' third_line'></div>
                </div>
                </div>
               
            </div>
        </div>
    </div>
    <div className=' ellips_5 position-absolute d-none d-md-block z-0'>
        <img src={ellips_5} alt="ellips_5" />
    </div>
    <div className=' ellips_6 position-absolute d-none d-md-block z-0'>
        <img src={ellips_6} alt="ellips_5" />
    </div>
   </section>
  )
}

export default Audited