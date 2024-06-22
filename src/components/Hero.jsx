import React from 'react'

const HeroSection = () => {
    const images = {
        image1: 'https://www.valiantgrouplink.com/wp-content/uploads/2020/05/prime-sub-contractor.jpeg',
        image2: 'https://www.bobvila.com/wp-content/uploads/2021/07/What-is-a-Contractor.jpg?w=1200',
    };
    const text = {
        heroTitle: {
            parts: ['YOUR IMAGINATION', ' OUR INSPIRATION.'],
        }
    }

    return (
        <>
            <div className="py-8 flex flex-col text-primary">
                <div className='px-8 mb-12'>
                    <div className="text-container grid md:grid-cols-8 gap-4 md:w-full md:pl-8">
                        <div className="md:col-span-5"> 
                            <p className="text-3xl md:text-6xl font-bold mb-4">
                                {text.heroTitle.parts[0]}.<br/>
                                {text.heroTitle.parts[1]}
                            </p>
                        </div>
                        <div className='md:col-span-3'>
                            <p className="text-xl md:text-2xl mb-4">This is a medium font paragraph.</p>
                            <p className="text-base md:text-lg">This is a small font paragraph.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 h-full overflow-x-hidden">
                    {/* {Object.values(images).map((src, index) => (
                        <img key={index} src={src} alt={`Hero Image ${index + 1}`} className={`object-cover w-${index === 0 ? '2/5' : '3/5'} h-[45vh] md:h-auto`}/>
                    ))} */} 
                    {/* this is not used cuz often buggy fix it later */}
                    <img src={images.image1} className='object-cover w-2/5 h-[45vh] md:h-auto' alt="" />
                    <img src={images.image2} className='object-cover w-3/5 h-[45vh] md:h-auto' alt="" />
                </div>
            </div>
            
        </>
    )
}
export default HeroSection
