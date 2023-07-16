import { Parallax } from 'react-parallax';
import cover from '../assets/banner/banner.jpg'
import { BiWorld } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Slider from '../Components/Slider/Slider';



const Home = () => {
    return (
        <div className='mb-20'>
            <Parallax blur={5} bgImage={cover} bgImageAlt="" strength={600}>

                <h1 className='uppercase text-center text-5xl font-extrabold text-white mt-40'>Get your admission today</h1>

                <div className='lg:flex lg:justify-evenly mt-20 mb-16'>
                    <div className='flex bg-[#9681EB] p-4 mt-16 hover:bg-[#F3AA60]'>
                        <BiWorld className='text-5xl'></BiWorld>
                        <div>
                            <h2 className='text-4xl text-white'>Online Courses</h2>
                            <p className='text-center text-white hover:text-black'>view more</p>
                        </div>
                    </div>
                    <div className='flex bg-[#9681EB] p-4 mt-16 hover:bg-[#F3AA60]'>

                        <BsActivity className='text-5xl'></BsActivity>
                        <div>
                            <h2 className='text-4xl text-white'>Our Activity</h2>
                            <p className='text-center text-white hover:text-black'>view more</p>
                        </div>
                    </div>
                    <div className='flex bg-[#9681EB] p-4 mt-16 hover:bg-[#F3AA60]'>

                        <AiOutlineUsergroupAdd className='text-5xl'></AiOutlineUsergroupAdd>
                        <div>
                            <h2 className='text-4xl text-white'>Our Instructors</h2>
                            <p className='text-center text-white hover:text-black'>view more</p>
                        </div>
                    </div>
                </div>
                <h1 className='uppercase text-center text-5xl font-extrabold text-[#f6e5e5] mt-40'>We are offering you all language</h1>
                <p className='text-center text-white text-2xl mt-4 mb-20'>You choose yours</p>
            </Parallax>
            <div className='mt-40'>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;