
import { Link } from 'react-router-dom';
import bg from '../assets/login/background.png'
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card p-8 flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <p className='text-lg'>Don't have an account? <Link className='text-rose-200 font-extrabold underline hover:text-orange-300'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;