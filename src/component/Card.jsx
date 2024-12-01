import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Card = ({ card }) => {
    const { adventureTitle, image, ecoFriendlyFeatures = [], id } = card;
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleExploreClick = () => {
        if (user) {
            navigate(`/details/${id}`); 
        } else {
            navigate('/login'); 
        }
    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl max-w-7xl mx-auto">
            <figure className="px-4 pt-10">
                <img
                    src={image}
                    alt={adventureTitle}
                    className="rounded-xl w-[400px] h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{adventureTitle}</h2>
                <ul className="list-disc text-left ml-[-70px] pl-5 text-gray-500">
                    {ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="card-actions mt-4">
                    <button
                        onClick={handleExploreClick}
                        className="btn btn-primary text-white">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
