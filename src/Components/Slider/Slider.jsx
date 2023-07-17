import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import photo1 from '../../assets/slider/istockphoto-1198270661-1024x1024.jpg'
import photo2 from '../../assets/slider/istockphoto-1286519342-1024x1024.jpg'
import photo4 from '../../assets/slider/istockphoto-1369596152-1024x1024.jpg'
const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><img src={photo2} className='w-full h-2/4' alt="" /></SwiperSlide>
                <SwiperSlide><img src={photo1} className='w-full h-2/4' alt="" /></SwiperSlide>
                <SwiperSlide><img src={photo4} className='w-full h-2/4' alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;