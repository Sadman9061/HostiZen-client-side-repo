import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';


export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    // useEffect(() => {
    //     fetch('https://hostizen-server-side.vercel.app/testimonials')
    //         .then(res => res.json())
    //         .then(data => setTestimonials(data))

    // }, [])
    const { data} = useQuery({
        queryKey: ['testimonial'],
        queryFn: async () => {
         
        fetch('https://hostizen-server-side.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))   
        }
    })
    console.log(testimonials)
    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"  >

                {testimonials.map(item =>
                    <SwiperSlide key={item.name}>

                        <div className='flex flex-col  md:flex-row gap-4 lg:gap-20 items-center justify-center  p-4 md:p-10 lg:p-20 w-full bg-[#8ABB6A] text-white h-100% lg:h-[500px] border '>
                            <div className='space-y-4 lg:space-y-10'>
                                <h1 className=' p-0 md:p-14 rounded-full bg-white text-[#8ABB6A] text-2xl lg:text-6xl italic shadow-2xl'>  {item.rating}  </h1>
                                <h1 className='font-bold italic text-sm'>SCORE FROM 356  REVIEWS</h1>
                            </div>
                            <div className='flex flex-col   space-y-4 lg:space-y-10 text-center'>
                                <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic -ml-2'>Guests say:</h1>
                                <h1> "{item.name}"</h1>
                                <h1>{item.description}</h1>
                                {/* <h1>{item.rating}</h1> */}
                                <div className='flex justify-center items-center'>
                                    <div className="rating rating-lg ">
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[80%] md:w-[44%]'>
                                <img className='rounded-full shadow-2xl ' src={item.image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>)}

            </Swiper>
        </>
    );
}
