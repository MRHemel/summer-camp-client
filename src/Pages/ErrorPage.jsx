
import { Link } from 'react-router-dom';
import error from '../assets/404.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div>
            <Link to={'/'}><span className='bg-blue-300 border-8 rounded-2xl p-4 '>go back to home</span></Link>
            <Lottie className=' w-1/2 mx-auto' loop={true} animationData={error}></Lottie>
        </div>
    );
};

export default ErrorPage;