
import Slider from '../Components/Slider/Slider';
import Banner from '../Components/Banner/Banner';
import PopularInstructor from '../Components/PopularInstructor/PopularInstructor';



const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <div className='mt-40'>
                <Slider></Slider>
            </div>
            <div className='mt-20'>
                <h1 className='text-center lg:text-5xl font-bold mb-20 border-y-8 p-8'>Popular Instructors</h1>
                <PopularInstructor></PopularInstructor>
            </div>
            <div className='mt-20'>
                <h1 className='text-center lg:text-5xl font-bold mb-20 border-y-8 p-8'>Popular Classes</h1>

            </div>
        </div>
    );
};

export default Home;