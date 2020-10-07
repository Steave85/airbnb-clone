import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Search from './Search';
import '../styles/Banner.css';

function Banner() {
    const [showSearh, setShowSearch] =  useState(false);
    const history = useHistory();
    return (
        <div className='banner'>
            <div className="banner__serach">
                {showSearh && <Search />}
                <Button variant='outlined' 
                        className='banner__serachButton'
                        onClick={() => setShowSearch(!showSearh)}>
                            {(!showSearh) ? 'Search Dates' : 'Hide'}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imaginations</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button varient='outlined' 
                        onClick={()=>history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
