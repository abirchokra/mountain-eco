import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ResetPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent successfully!");
        } catch (error) {
            setMessage(error.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className="hero bg-base-200 my-24">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Reset Password!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handlePasswordReset}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Reset</button>
                            </div>
                            {message && (
                                <div className="mt-4 text-center">
                                    <p className={`text-sm ${message.includes("success") ? 'text-green-500' : 'text-red-500'}`}>
                                        {message}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResetPass;
