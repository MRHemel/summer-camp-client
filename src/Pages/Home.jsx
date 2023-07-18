
import Slider from '../Components/Slider/Slider';
import Banner from '../Components/Banner/Banner';
import PopularInstructor from '../Components/PopularInstructor/PopularInstructor';
import PopularCourses from '../Components/PopularCourses/PopularCourses';
import FeedBack from '../Components/FeedBack/FeedBack';

import 'animate.css';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <div className='mt-40'>
                <Slider></Slider>
            </div>
            <div className='mt-20'>
                <Fade delay={500} direction='up'>
                    <h1 className='text-center lg:text-5xl font-bold mb-10 border-y-8 p-8'>Popular Instructors</h1>
                </Fade>
                <PopularInstructor></PopularInstructor>
            </div>
            <div className='mt-20'>
                <Fade delay={500} direction='up'>
                    <h1 className='text-center lg:text-5xl font-bold mb-10 border-y-8 p-8 ' >Popular Courses</h1>
                </Fade>
                <PopularCourses></PopularCourses>
            </div>
            <div>
                <FeedBack></FeedBack>
            </div>
        </div>
    );
};

export default Home;