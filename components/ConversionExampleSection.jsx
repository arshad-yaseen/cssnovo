import React from 'react'
import ConversionDemo from './ConversionDemo'

function ConversionExampleSection() {
  return (
    <div className='w-full h-[110vh]  bg-[#F0F1EE]' >
        <h1 className='text-6xl font-medium text-center mt-16 leading-[94px] text-[#161616] ' ><span className="home_hero_text_underline_2">Conversion</span> and <br /> optimization tools</h1>
        <ConversionDemo />
    </div>
  )
}

export default ConversionExampleSection