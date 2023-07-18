import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';



import instructor1 from '../../assets/instructor/instructor1.jpg'
import instructor2 from '../../assets/instructor/instructor2.jpg'
import instructor3 from '../../assets/instructor/instructor3.jpg'
import instructor4 from '../../assets/instructor/instructor4.jpg'
import instructor5 from '../../assets/instructor/instructor5.jpg'
import instructor6 from '../../assets/instructor/instructor6.jpg'
import instructor7 from '../../assets/instructor/instructor7.jpg'
import instructor8 from '../../assets/instructor/instructor8.jpg'
import instructor9 from '../../assets/instructor/instructor9.jpg'

const PopularInstructor = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                // autoplay={{
                //     delay: 1000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={instructor1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={instructor9} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default PopularInstructor;