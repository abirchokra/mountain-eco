import { FaGoogle } from "react-icons/fa";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError({ ...error, login: err.code });

            })

    }
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithGoogle();
            const user = result.user;


            setUser(user);

            navigate("/");
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar ></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl px-8">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {
                                    error.login && (
                                        <label className="label text-sm text-red-600">
                                            {error.login}


                                        </label>

                                    )
                                }
                                <label className="label">
                                    <Link to={'/resetPass'} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't Have an account? Please <Link to={'/signup'} className="text-red-500">SignUp</Link></p>
                            <div className="divider">OR</div>
                            <div className="relative ">
                                <button onClick={handleGoogleLogin} className="btn w-full">Login With Google</button>
                                <FaGoogle className="absolute top-4 left-4 w-5 h-5"></FaGoogle>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;