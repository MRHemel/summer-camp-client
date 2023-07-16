import { Parallax } from 'react-parallax';
import cover from '../assets/banner/banner.jpg'


const Home = () => {
    return (
        <div>
            <Parallax blur={5} bgImage={cover} bgImageAlt="the cat" strength={600} className='absolute '>
                <h2 className='mt-11 h-96'>dhfgjghg</h2>
                <h2 className='mt-11 h-96'>dhfgjghg</h2>
                <h2 className='mt-11 h-96'>dhfgjghg</h2>
                <h2 className='mt-11 h-96'>dhfgjghg</h2>
            </Parallax>
        </div>
    );
};

export default Home;