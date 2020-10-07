import React from 'react';
import {Button} from '@material-ui/core';
import SearchResult from '../components/SearchResult';
import {useStateValue} from '../context/RoomProvider';
import '../styles/SearchPage.css';

function SearchPage() {
    const [{dates:{startDate, endDate, guests}}] = useStateValue();
    const [{rooms}] = useStateValue();

    const formatedStartDate = new Date(startDate).toLocaleString('default', { month: 'short' }) + '-'
                            + new Date(startDate).toLocaleString('default', { day: 'numeric' });
    const formatedEndDate = new Date(endDate).toLocaleString('default', { month: 'short' }) + '-'
                            + new Date(endDate).toLocaleString('default', { day: 'numeric' });
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <h1>Stays nearby</h1>
                <p>{formatedStartDate}  to  {formatedEndDate} · {guests} guests</p>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type Of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms And Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            {
                rooms.map((room)=><SearchResult key={room.id} {...room} />)
            }
        </div>
    )
}

export default SearchPage;
