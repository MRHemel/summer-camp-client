
import { Link, useNavigate } from 'react-router-dom';
import bg from '../assets/login/background.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error)
            })
        form.reset()
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedinUser = result.user;
                console.log(loggedinUser)
                const saveStudent = { name: loggedinUser.displayName, email: loggedinUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveStudent)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Login Successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        }
                    })
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card p-8 flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"><input type="submit" value="Login" /></button>
                        </div>
                    </form>
                    <p className='text-red-600 font-bold '>{error.message}</p>
                    <p className='text-lg'>Don't have an account? <Link to={'/signup'} className='text-rose-200 font-extrabold underline hover:text-orange-300'>Sign Up</Link> </p>
                    <div className="divider"></div>
                    <div className='text-center space-y-4 my-0'>
                        <h1 className='text-lg font-extrabold'>Login with</h1>
                        <button onClick={handleGoogle} className='btn btn-circle btn-outline'>
                            <FaGoogle className='text-3xl w-full '></FaGoogle>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;