
import error from '../assets/404.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className='mt-0 scr'>
            <Lottie className=' w-1/2 mx-auto' loop={true} animationData={error}></Lottie>
        </div>
    );
};

export default ErrorPage;