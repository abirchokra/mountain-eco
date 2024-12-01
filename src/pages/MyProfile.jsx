import { useContext } from "react";
import Navbar from "../component/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
    

    return (
        <div className="max-w-7xl mx-auto bg-gray-100 ">
            <Navbar />
            <div className="md:flex justify-between items-center">
                <div className="bg-[rgb(18,24,31)] py-4 space-y-4 px-4 text-white rounded-lg my-36 shadow-lg border border-white w-[700px] h-[300px]">
                    <h2>{user?.displayName || "No name provided"}</h2>
                    <p>{user?.email || "No email available"}</p>
                    <p>Joined: {user?.metadata?.creationTime || "Unknown"}</p>
                    <Link to={'/update'}><button className="mt-3 btn">Update</button></Link>
                </div>
                <div>
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User Avatar"
                            className="w-[300px] rounded-lg"
                        />
                    ) : (
                        <p>No photo available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
