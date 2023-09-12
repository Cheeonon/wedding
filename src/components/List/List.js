import "./List.scss";
import { getData } from '../../utils/axios';
import { useEffect, useState } from 'react';

const List = () => {
    const [guests, setGuests] = useState([]);
    let guestsNum = 0;
    let totalGuest = 0

    useEffect(()=>{
        getData()
        .then(resolve =>{
            console.log(resolve.data)
            setGuests(resolve.data)
        }).catch(error => {
            console.log(error)
        })
        
    }, [])

    if(!guests){
        return <div>Loading...</div>
    } 


    return (
        <div className="list">
            {guests.map((item, i) => {
                guestsNum += Number(item.guest);
                totalGuest += Number(item.guest) + 1;

                return (
                    <ul key={i} className="list__items">
                        <li className="list__item"><b>{i+1}</b></li>
                        <li className="list__item"><b>Name:</b> {item.name}</li>
                        <li className="list__item"><b>Guests:</b> {item.guest}</li>
                        <div className="horizontalLine"></div>
                    </ul>
                )}   
            )}
            <div className="total">Total guests: {guestsNum}</div>
            <div className="total">Total guests including primary attendee: {totalGuest}</div>
        </div>
    )
}

export default List