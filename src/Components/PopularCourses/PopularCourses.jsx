import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import class1 from '../../assets/classes/class1.jpg'
import class2 from '../../assets/classes/class2.jpg'
import class3 from '../../assets/classes/class3.jpg'
import class4 from '../../assets/classes/class4.jpg'
import class5 from '../../assets/classes/class5.jpg'

const PopularCourses = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={class1} alt="" /><p className='text-center text-2xl font-extrabold bg-[#A5D7E8] text-black relative bottom-16 border-t-2 p-4'>Learn English</p></SwiperSlide>
                <SwiperSlide><img src={class2} alt="" /><p className='text-center text-2xl font-extrabold bg-[#A5D7E8] text-black relative bottom-16 border-t-2 p-4'>Learn chinese</p></SwiperSlide>
                <SwiperSlide><img src={class3} alt="" /><p className='text-center text-2xl font-extrabold bg-[#A5D7E8] text-black relative bottom-16 border-t-2 p-4'>Learn Bangla</p></SwiperSlide>
                <SwiperSlide><img src={class4} alt="" /><p className='text-center text-2xl font-extrabold bg-[#A5D7E8] text-black relative bottom-16 border-t-2 p-4'>Learn Italiano</p></SwiperSlide>
                <SwiperSlide><img src={class5} alt="" /><p className='text-center text-2xl font-extrabold bg-[#A5D7E8] text-black relative bottom-16 border-t-2 p-4'>Learn Korean</p></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PopularCourses;