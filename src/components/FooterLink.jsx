import React from 'react'

const FooterLink = () => {
  return (
    <>
    <div className='w-full py-6 flex flex-row gap-x justify-between'>
        <div className='flex flex-col gap-y-4'>
            <p className='font-bold'>
                Product
            </p>
            <p>
                About
            </p>
            <p>
                Contact
            </p>
        </div>
        <div className='flex flex-col gap-y-4'>
            <p className='font-bold'>
                Company
            </p>
            <p>
                About
            </p>
            <p>
                Contact
            </p>
        </div>
        <div className='flex flex-col gap-y-4'>
            <p className='font-bold'>
                Utility
            </p>
            <p>
                About
            </p>
            <p>
                Contact
            </p>
        </div>
    </div>
    </>
  )
}

export default FooterLink