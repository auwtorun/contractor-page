import React from "react";
import Rating from "./rating/Rating";

const Testimonial = () => {
  return (
    <>
      <div className="w-full px-8 md:px-14 py-12 text-primary flex flex-col">
        <h1 className="text-2xl font-bold text-secondary mb-4">Testimonials</h1>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-primary">
            What People Say About Us?
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-x-20">
            <Rating rating={4} profilePic="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" name="Dames Jean" desc="From start to finish, [Your Company Name] demonstrated exceptional expertise and commitment. They delivered a high-quality project on time and within budget."></Rating>
            <Rating rating={3} name="Unknown" desc="Choosing [Your Company Name] was the best decision we made. Their professionalism and dedication ensured our project exceeded all expectations."></Rating>
            <Rating rating={5} name="Her" desc="The team at [Your Company Name] brought our ideas to life with incredible precision and creativity. We couldn't be happier with the result."></Rating>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
