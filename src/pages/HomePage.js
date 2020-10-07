import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import {useStateValue} from '../context/RoomProvider';
import '../styles/HomePage.css';

function HomePage() {
    const [{homeCards, roomCards}] = useStateValue();
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            {
                homeCards.map((card)=><Card key={card.id} src={card.src} title={card.title} description= {card.description} />)
            }
            </div>
            <div className='home__section'>
            {
                roomCards.map((card)=><Card key={card.id} src={card.src} title={card.title} description= {card.description} price={card.price} />)
            }
            </div>
        </div>
    )
}

export default HomePage
