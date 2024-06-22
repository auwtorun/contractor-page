import React, { useState, useEffect } from 'react';
import QuestionSlideDown from "./QuestionSlideDown";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const profile = [
    { title: "Company Profile", paragraph: "First Paragraph" },
    { title: "About Us", paragraph: "Second Paragraph" },
    { title: "Contact Us", paragraph: "Third Paragraph" },
  ];
  return (
    <>
      <div className="px-8 md:px-14 w-full flex flex-col md:grid md:grid-cols-2 gap-x-10 my-12 text-primary">
        <div className="md:pr-12 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Why choose us</h1>
          <p className="my-6">
            At [Your Company Name], we deliver excellence through our
            experienced team, innovative solutions, and customer-centric
            approach. We prioritize your satisfaction with transparent
            communication, ethical practices, and strict safety protocols,
            ensuring high-quality workmanship and a reliable construction
            experience. Choose us for a trusted and innovative partner in your
            construction projects.
          </p>
          <img
            src="https://lasbali.com/wp-content/uploads/2019/05/wallpaper-bengkel-konstruksi-bali.png"
            className="w-full object-cover aspect-square	"
            alt=""
          />
        </div>
        <div className='flex flex-col md:flex-col-reverse justify-end h-full'>
          <QuestionSlideDown></QuestionSlideDown>
            <img
            src="https://bizindo.com/wp-content/uploads/Construction-law.jpg"
            className="w-full object-cover aspect-video	mb-6"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
