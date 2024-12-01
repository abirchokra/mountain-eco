import { FaLocationPin } from "react-icons/fa6";
import Navbar from "./Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="md:flex flex-col md:flex-row justify-between items-start md:items-center gap-8 my-28">
                {/* Map Section */}
                <div className="w-full md:w-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
              
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <div className="space-y-6">
                        <div className="md:flex items-center gap-4">
                            <FaLocationPin className="text-2xl text-gray-600" />
                            <div>
                                <h3 className="text-xl font-semibold">Address</h3>
                                <p className="text-gray-400">123 Main Street, Anytown, USA</p>
                                <hr className="mt-2 w-[400px]"/>

                            </div>
                        </div>
                        <div className="md:flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl text-gray-600" />
                            <div>
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                                <hr className="mt-2 w-[400px]"/>

                            </div>
                        </div>
                        <div className="md:flex items-center gap-4">
                            <MdEmail className="text-2xl text-gray-600" />
                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p className="text-gray-400">mountain@eco.com</p>
                                <hr className="mt-2 w-[400px]"/>

                            </div>
                        </div>
                        <div className="md:flex items-center gap-4">
                            <TbWorld className="text-2xl text-gray-600" />
                            <div>
                                <h3 className="text-xl font-semibold">URL</h3>
                                <p className="text-gray-400">www.mountain-view.com</p>
                                <hr className="mt-2 w-[400px]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
