import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io5'
import {RiTwitterXLine} from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='bg-[#047bd5] text-white'>
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className='hidden md:flex items-center space-x-4'>
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
          </div>
          
          <div className="text-center text-sm flex-grow">
            <span>Where Quality Meets Convenience.</span>
            </div>
            <div className='text-sm hidden md:block'>
              <a href='tel:+1234567890' className='hover:text-gray-300'>+1234567890</a>
            </div>
      </div>
    </div>
  )
}

export default Topbar;