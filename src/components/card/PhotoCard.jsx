import React from 'react'
import { ArrowOutward } from '@mui/icons-material'

const PhotoCard = ({img, title, link, desc, mt}) => {

  return (
    <>
    <div className={`w-fit md:w-1/4 text-primary md:my-12 mt-[${mt}px] `}>
      <a href={link} className=''>
        <div className='relative w-fit h-max overflow-hidden mb-4'>
          <img src={img} className='aspect-square object-cover transform transition-transform duration-300 hover:scale-110' alt="" />
        </div>
        <div>
          <div className='flex flex-row justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <span className='text-secondary'>
              <ArrowOutward fontSize="medium" />
            </span>
          </div>
          <p>{desc}</p>
        </div>
      </a>
    </div>
    </>
  )
}

export default PhotoCard
