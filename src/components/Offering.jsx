import React from "react";
import ActionButton from "./button/ActionButton";

const Offering = () => {
    const images = [
        "https://www.seoreseller.com/wp-content/uploads/2016/02/SEOReseller_Future-Proof-Your-Agency_Offer-Services.png",
        "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?cs=srgb&dl=pexels-mantasink-1106476.jpg&fm=jpg",
        "https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?cs=srgb&dl=pexels-500photos-com-15338-93400.jpg&fm=jpg"
      ];

  return (
    <>
      <div className="w-full px-8 md:px-14 py-12 text-primary flex flex-col-reverse md:flex-row md:justify-between gap-y-6 gap-x-20">
        <div className="w-full md:w-2/3 h-full">
          <img src={images[0]} className="w-full h-auto aspect-square object-cover object-center" alt="" />
        </div>
        <div className="w-full h-full flex flex-col justify-between">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get ready for our comprehensive services offerings
          </h1>
          <p className="mb-4">
            Get ready for our comprehensive services offerings, crafted to
            ignite your imagination and fuel your inspiration with unparalleled
            expertise and quality.
          </p>
          <div className="w-full md:w-1/3 mb-4">
            <ActionButton title="Start Building" buttonColor="secondary" textColor="white" width="full" />
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img src={image} className="w-full h-full aspect-square object-cover" alt={`Offering ${index + 1}`} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Offering;
