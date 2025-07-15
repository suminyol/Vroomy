import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import {motion} from 'motion/react'

function Testimonial() {

    const testimonials = [
        { name: "Abhijeet Poonia", 
            location: "Chandigarh,India", 
            image:assets.testimonial_image_1, rating: 5, 
            testimonial: "Rented for a quick trip around Chandigarh and everything went great. Quick booking, responsive team, and the car ran perfectly. 10/10!" },

            { name: "Mary Stokes", 
            location: "New Delhi,India", 
            image:assets.testimonial_image_2, rating: 5, 
            testimonial: "Super chill experience. The car was ready on time, no unnecessary paperwork, and the team was friendly. Loved it!" },
            { name: "Naveen Gill", 
            location: "Samain, Haryana", 
            image:assets.testimonial_image_3, rating: 5, 
            testimonial: "Booked a car in Hisar and the process couldn’t have been smoother. No stress, just great service and a clean ride. Definitely using it again!" },
    ];
    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
           
            <Title title="What Our Customer Say" subTitle="We're always looking for ways to improve. If you have a positive experience with us, leave a review."/>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <motion.div
                            initial={{opacity:0,y:40}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:0.6,delay:0.2 * index,ease:'easeOut'}}
                            viewport={{once:true,amount:0.3}}
                     key={index} className="bg-[#E2E8F0] p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star-icon" className='h-6' />
                                
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;