import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { AuthContext } from "../Provider/AuthProvider";


const Update = () => {
    const { user } = useContext(AuthContext); 
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [name, setName] = useState(user?.displayName || "");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });
            setMessage("Profile updated successfully!");
            navigate("/myProfile"); 
        } catch (error) {
            setMessage(error.message || "Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="hero bg-base-200 my-24">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter photo URL"
                                    className="input input-bordered"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Update Information
                                </button>
                            </div>
                            {message && (
                                <div className="mt-4 text-center">
                                    <p
                                        className={`text-sm ${
                                            message.includes("success")
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
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

export default Update;
