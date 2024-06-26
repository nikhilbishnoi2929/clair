import React from 'react'
import ellips_9 from '../assets/image/svg/ellips-9.svg'
import { Accordion } from 'react-bootstrap'
const Frequently = () => {
  return (
     <section className=' freq_bg  position-relative' id='section5'>
       <div className=' container max-w-1140 pt-177 pb-180'>
       <div className=' d-flex justify-content-center'>
            <h3 className=' manrope mb-0 text-center fw-600 fs-4xl line-57 white-1 '>Frequently Asked  <span className='yellow'>Questions</span></h3>
        </div>
        <div className=' max-w-800 pt-60 mx-auto'>
        <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0"data-aos="fade-left z-3">
                                    <Accordion.Header className=' manrope fw-400 fs-md line-24 para-color-3 '>WHAT IS $CLAIR?</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mt-24 z-3 'data-aos="fade-right">
                                    <Accordion.Header className=' manrope fw-400 fs-md line-24 para-color-3 '>Arcu in pellentesque sit odio.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className='  manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className='d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='mt-24 z-3'data-aos="fade-left">
                                    <Accordion.Header className='  manrope fw-400 fs-md line-24 para-color-3 '>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className='  manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='mt-24 z-3'data-aos="fade-right">
                                    <Accordion.Header className=' manrope fw-400 fs-md line-24 para-color-3'>Metus augue dictumst sit amet.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='mt-24 z-3'data-aos="fade-left">
                                    <Accordion.Header className=' manrope fw-400 fs-md line-24 para-color-3 '>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className='  manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='mt-24 z-3'data-aos="fade-right">
                                    <Accordion.Header className='  manrope fw-400 fs-md line-24 para-color-3'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className=' manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='mt-24 z-3'data-aos="fade-left">
                                    <Accordion.Header className=' manrope fw-400 fs-md line-24 para-color-3 '>Elementum at dui varius consequat fringilla.</Accordion.Header>
                                    <Accordion.Body className=' '>
                                        <span className='  manrope fw-400 fs-md line-24 para-color-3'>
                                            Built on the Ethereum blockchain and powered by the most advanced<span className=' d-lg-block'></span>AI technology, Baby Sinclair has the potential to make millions.   </span>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
        </div>
       </div>
       <div className=' ellips_9 position-absolute z-0'>
        <img src={ellips_9} alt="ellips_9" />
       </div>
      
     </section>
  )
}

export default Frequently