import React from 'react'
import '../Sertificate/Sert.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ser1 from '../../assets/ser1.png'
import ser2 from '../../assets/ser2.png'
import ser3 from '../../assets/ser3.png'
import ser4 from '../../assets/ser4.png'
import ser5 from '../../assets/ser5.png'
import Slider from 'react-slick';


function Sertificates() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="sertificate">
        <h3 className='ser__name'>Качество продукции подтверждают сертификаты </h3>
        <ul className='ser__list'>
        <Slider className='slider' {...settings}>
        <div>
          <img src={ser1} alt="" />
        </div>
        <div>
          <img src={ser2} alt="" />
        </div>
        <div>
        <img src={ser3} alt="" />
        </div>
        <div>
        <img src={ser4} alt="" />
        </div>
        <div>
        <img src={ser5} alt="" />
        </div>
        <div>
        <img src={ser1} alt="" />
        </div>
        <div>
        <img src={ser2} alt="" />
        </div>
        <div>
        <img src={ser3} alt="" />
        </div>
      </Slider>
        </ul>
    </div>
  )
}

export default Sertificates
