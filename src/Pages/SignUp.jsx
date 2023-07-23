import { useForm } from "react-hook-form"

import bg from '../assets/login/background.png'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const SignUp = () => {

    const { createuser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const pass = watch("password");

    const onSubmit = (data) => {
        // console.log(data)
        createuser(data.email, data.password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
            })


    }


    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card p-8 flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Password</span>
                            </label>
                            <input type="text" {...register("password", {
                                required: true, minLength: 6,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className="text-red-600">This field is required</span>}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">minimum 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">atleast 1 digit,1 lower and upper letter,1 special character</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Confirm Password</span>
                            </label>
                            <input type="text" {...register("confirmPassword", { required: true, validate: (value) => value === pass || 'password does not match' })} placeholder="password" className="input input-bordered" />
                            {errors.confirmPassword && <span className="text-red-600">This field is required</span>}
                            {errors.confirmPassword?.type === 'validate' && (
                                <span className="text-red-600">{errors.confirmPassword.message}</span>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                    {/* <p className='text-lg'>Don't have an account? <Link to={'/signup'} className='text-rose-200 font-extrabold underline hover:text-orange-300'>Sign Up</Link> </p> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;