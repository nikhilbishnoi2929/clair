import React from 'react'
import card_p from '../assets/image/svg/card_b_position.svg'
import card_2 from '../assets/image/svg/card_position_2.svg'
import card_3 from '../assets/image/svg/circle_line_3.svg'
import elleps_7 from '../assets/image/svg/ellips-7.svg'
import line_roadmap from '../assets/image/svg/lineroadmap.svg'
import elleps_8 from '../assets/image/svg/ellips-8.svg'
const Roadmap = () => {
    return (
        <section className=' roadmap_bg position-relative mt--2'>
            <div className=' container max-w-1080 pb-366'>
                <div className=' d-flex justify-content-center  pt-71'>
                    <h3 className=' manrope mb-0 fw-600 fs-4xl line-57 white-1 text-center  '>Roadmap</h3>
                </div>
                <div className=' row pt-100'>
                    <div className=' col-lg-4 col-md-6 col-12 z-3   '>
                        <div className='w-100 d-flex justify-content-md-end justify-content-center  pt-184'>
                            <div className=' card_roadmap  position-relative w-100'>
                                <h3 className=' manrope fw-500 fs-xxl  z-3 line-48 mb-0 white'>Phase 1</h3>
                                <ul className=' ps-0 mb-0 ml_24'>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color   team_card pt-16 ' > Team Recruitment</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Social Media</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Audit Smart Contract</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >Whitepaper</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Presale Launch</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Community Growth</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >AI Avatars Release</li>
                                </ul>
                                <div className=' position-absolute d-none d-md-block position_circleline' >
                                    <img src={card_p} alt="card_p" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' col-lg-4 col-md-6 col-12  z-3 pt--30      '>
                        <div className='d-flex justify-content-lg-center justify-content-md-start justify-content-center w-100 pt-78'>
                            <div className=' w-100 card_roadmap position-relative'>
                                <h3 className=' manrope fw-500 fs-xxl  z-3 line-48 mb-0 white'>Phase 2</h3>
                                <ul className=' ps-0 mb-0 ml_24'>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color   team_card pt-16 ' > Official Launch</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Burns 5%</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Major DEX & CEX Listings</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >Coinmarketcap</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > CoinGecko</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Influencers Marketing</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >More AI Avatars Release</li>
                                </ul>
                                <div className=' position-absolute  d-none d-md-block position_circleline_2' >
                                    <img src={card_2} alt="card_p" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col-lg-4  col-12 z-3  pt__30 '>
                        <div className='d-flex justify-content-lg-start justify-content-center '>
                            <div className=' position-relative card_roadmap w-100'>
                                <h3 className=' manrope fw-500 fs-xxl  z-3 line-48 mb-0 white'>Phase 3</h3>
                                <ul className=' ps-0 mb-0 ml_24'>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color   team_card pt-16 ' >Burns (5% quarterly)</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' > Rewards Program</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >Multiple Partnerships</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color  pt_8 team_card ' >Create your own AI Avatar Voiceover.</li>
                                    <li className=' manrope z-3 fw-500 fs-md line-24 para-color max-w-201  pt_8 team_card ' > AI Metaverse Avatar Play-to-Earn</li>

                                </ul>
                                <div className=' position-absolute  d-none d-md-block w-100 position_circleline_4' >
                                    <img src={card_3} alt="card_p" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-0 position-absolute line_roadmap '>
                <img className='' src={line_roadmap} alt="line" />
            </div>
            <div className=' position-absolute z-0 elleps_7'> 
                <img src={elleps_7} alt="" />
            </div>
            <div className=' position-absolute z-0 elleps_8'> 
                <img src={elleps_8} alt="" />
            </div>
        </section>
    )
}

export default Roadmap