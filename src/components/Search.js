import React, {useState} from 'react';
import {DateRangePicker} from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {actionTypes} from '../context/Reducer'
import { useStateValue } from '../context/RoomProvider';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../styles/Search.css';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState(1);
    const history = useHistory();
    const [state, dispatch] = useStateValue();

    const selectionRange = {
        startDate,
        endDate,
        key: "selection",
    }
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const onClickHandler = (e)=>{
        const dispatcher = {
            ...state,
            type: actionTypes.SET_DATES,
            dates:{
                startDate: startDate.getTime(),
                endDate: endDate.getTime(),
                guests
            }
        }
        dispatch(dispatcher);
        history.push('/search')
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests <PeopleIcon /></h2>
            <input min={0} defaultValue={1} type="number" onChange={(e)=>setGuests(e.target.value)}/>
            <Button onClick={onClickHandler}>Search Airbnb</Button>
        </div>
    )
}

export default Search
