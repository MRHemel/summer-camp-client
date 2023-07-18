import { Parallax } from 'react-parallax';
import cover from '../../assets/banner/banner2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { FaQuoteRight } from "react-icons/fa";
import student from '../../assets/banner/student.jpg'
import student2 from '../../assets/banner/student2 .jpg'
import student3 from '../../assets/banner/student3.jpg'
import student4 from '../../assets/banner/student4.jpg'
import student5 from '../../assets/banner/student5.jpg'

const FeedBack = () => {
    return (
        <div>
            <Parallax blur={5} bgImage={cover} bgImageAlt="" strength={800}>
                <h1 className='uppercase text-center text-5xl font-extrabold text-white mt-28 w-auto mb-20 py-4 outline outline-offset-2 outline-8'>What our students say</h1>
                <div>
                    <Swiper
                        spaceBetween={30}
                        effect={'flip'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFlip, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>M R Hemel</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student2} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>Ruksana</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student3} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>Mostakin Ahamed</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student4} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>Al Nayem Shuvo</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student5} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>Noboni</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-3/5 mx-auto space-y-8 mb-20'>
                                <FaQuoteRight className='mx-auto text-white'></FaQuoteRight>
                                <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aspernatur debitis laudantium odio facilis esse minus similique doloremque. Aut nostrum odio debitis soluta ipsa sed id mollitia corporis assumenda magnam.</p>
                                <div className=''>
                                    <img src={student} className='rounded-full w-40 mx-auto' alt="" />
                                </div>
                                <h2 className='text-white text-2xl font-bold text-center'>M R Hemel</h2>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Parallax>
        </div>
    );
};

export default FeedBack;