import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useState } from 'react';

const Details = () => {
    const card = useLoaderData();
    const [showModal, setShowModal] = useState(false);

    if (!card) {
        return <p>Loading...</p>;
    }

    const { adventureTitle, image, shortDescription, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures } = card;

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            window.open('https://meet.google.com/landing', '_blank'); 
        } else {
            setShowModal(true);
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='mt-20'>

                <h1 className='text-2xl font-bold'>{adventureTitle}</h1>
                <img src={image} alt={adventureTitle} className="my-6 rounded-lg max-w-full" />
                <div className='md:flex justify-between items-center'>
                    <div>
                        <p>{shortDescription}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Duration:</strong> {duration}</p>
                        <p><strong>Level:</strong> {adventureLevel}</p>
                        <h2 className="text-xl mt-4">Included Items:</h2>
                        <ul className="list-disc pl-6">
                            {includedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl mt-4">Eco-Friendly Features:</h2>
                        <ul className="list-disc pl-6 text-green-500">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button
                            className='btn btn-primary m-4'
                            onClick={handleTalkWithExpert}
                        >
                            Talk with Expert
                        </button>
                        <Link to={'/'} className='btn  m-4'>Back to Home</Link>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 md:flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Consultation Time</h2>
                        <p>Our experts are available between 10:00 AM and 8:00 PM.</p>
                        <button
                            className="btn btn-danger mt-4"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer></Footer>
        </div>
    );
};

export default Details;
