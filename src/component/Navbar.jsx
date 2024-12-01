import React, { useContext } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleProfile = () => {
        if (user) {
            navigate('/myProfile')

        } else {
            navigate('/login')
        }
    }

    return (
        <div className="navbar bg-blue-50 top-0 md:fixed shadow-lg z-20 max-w-7xl mx-auto ">
            <div className="navbar-start">

                <NavLink to={'/'} className="btn btn-ghost text-2xl font-bold">Mountain Eco</NavLink>
                <div className='relative '>
                    <input type="search" name="" id="" className='outline-none md:shadow-md md:w-[300px] w-0 md:rounded-full md:p-2' />
                    <CiSearch className='absolute top-2 right-0 mr-2 md:w-6 md:h-6'></CiSearch>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'} className='text-gray-950'>Home</Link></li>
                    <li><Link to={'/contact'} className='text-gray-950'>Contact Us</Link></li>

                    <li><Link onClick={handleProfile} className='text-gray-950'>My Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="md:flex gap-2 items-center">
                    {user && (
                        <>
                            <div className="text-xl font-bold">{user.displayName}</div>
                            {user.photoURL && (
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={user.photoURL}
                                    alt={`${user.displayName}'s avatar`}
                                />
                            )}
                        </>
                    )}
                    {user ? (
                        <button
                            onClick={logOut}
                            className="btn btn-neutral rounded-none"
                        >
                            Log out
                        </button>
                    ) : (
                        <Link to={'/login'} className="btn btn-neutral rounded-none">
                            Login
                        </Link>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Navbar;