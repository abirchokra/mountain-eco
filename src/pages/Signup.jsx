import { Link, useNavigate } from "react-router-dom"; 
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
    const { createNewUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(""); 
    const navigate = useNavigate(); 

 
    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return ""; 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");


        const error = validatePassword(password);
        if (error) {
            setPasswordError(error);
            return; 
        }

        setPasswordError(""); 

        try {
            const result = await createNewUser(email, password);
            const user = result.user;

 
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });


            setUser({ ...user, displayName: name, photoURL: photo });

            navigate("/");
        } catch (error) {
            console.error(error.message);
        }
    };

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
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="hero bg-base-200 min-h-screen my-16">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl px-16">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    name="photo"
                                    type="text"
                                    placeholder="photo url"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <p>
                                Already have an account?{" "}
                                <Link to={"/login"} className="text-red-500">
                                    Login
                                </Link>
                            </p>
                            <div className="divider">OR</div>
                            <div className="relative">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn w-full"
                                >
                                    Login With Google
                                </button>
                                <FaGoogle className="absolute top-4 left-4 w-5 h-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
