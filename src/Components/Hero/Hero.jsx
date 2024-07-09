import React from 'react'
import '../Hero/Hero.css'
function Hero() {
  return (
    <div className='hero'>
      <div className="hero__container">
          <h3 className='hero__title'><b>LEANGROUP - тубы и этикетки</b></h3>
          <h1 className='hero__name'>Ламинатные тубы</h1>
          <p className='hero__text'>Используются для производства зубных паст.
             Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
             <button className='hero__btn'>Каталог</button>
               
      </div>
    </div>
  )
}

export default Hero
