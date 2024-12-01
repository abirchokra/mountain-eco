import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    const fb = () => {
        window.open('https://www.facebook.com/', '_blank');
    }
    const insta = () => {
        window.open('https://www.instagram.com/', '_blank');
    }
    const whats = () => {
        window.open('https://www.whatsapp.com/', '_blank');
    }
    return (
        <footer className="mt-6 footer bg-neutral text-neutral-content w-full p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>

            </nav>

            <div className=' items-center'>

                <h1 className='font-semibold text-[18px] text-[rgb(146,153,162)]'>Social Media</h1>


                <div className='md:flex space-y-3 md:space-y-0  gap-8 items-center'>
                    <FaFacebook onClick={fb} className='w-6 h-6 cursor-pointer'  />
                    <FaInstagram onClick={insta} className='w-6 h-6 cursor-pointer'></FaInstagram>
                    <FaWhatsapp onClick={whats} className='w-6 h-6 cursor-pointer'></FaWhatsapp>
                </div>
            </div>

        </footer>
    );
};

export default Footer;