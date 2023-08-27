import { Parallax } from 'react-parallax';
import cover from '../../assets/banner/banner.jpg'
import { BiWorld } from "react-icons/bi";
import { BsActivity } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className='mb-20'>
            <Parallax blur={5} bgImage={cover} bgImageAlt="" strength={600}>

                <Slide>
                    <h1 className='uppercase text-center text-5xl font-extrabold bg-[#A5D7E8] bg-opacity-0 text-white mt-28'>Get your admission today</h1>
                </Slide>

                <div className='lg:flex lg:justify-evenly mt-20 mb-16'>
                    <div className='flex bg-[#19376D] p-4 mt-16 hover:bg-[#576CBC]'>
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
                <Slide direction='right'>
                    <h1 className='uppercase text-center text-5xl font-extrabold text-[#f5eff7] bg-[#A5D7E8] bg-opacity-0 mt-28'>We are offering you all language</h1>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className='text-center text-[#f7f2f6] bg-[#A5D7E8] text-3xl font-bold mt-4 mb-20 bg-opacity-0'>You choose yours</p>
                </Fade>
            </Parallax>
        </div>
    );
};

export default Banner;