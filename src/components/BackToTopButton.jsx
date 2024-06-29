 
import { useEffect, useState } from 'react';
 import buttont from '../assets/image/svg/bottomtotop.svg'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {

    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <img src={buttont} alt="buttont" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
