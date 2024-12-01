import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/mountain.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='mt-4 grid md:grid-cols-3 grid-cols-1 gap-4 max-w-7xl mx-auto'>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }

            <button className='btn btn-secondary w-[200px] ml-[100px] md:ml-[550px] my-6'>View more</button>

        </div>
    );
};

export default Cards;