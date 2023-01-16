import React from 'react'

export default function Card(props) {
    console.log(props.item)
    return (
        <div className='card'>
            <div className='img'>
                <img src={props.item.imageUrl} alt="img" />
            </div>

            <div className='content'>
                <div className='link'>
                    <p> <i className="fa-solid fa-location-dot icon"></i> <span className='location'>{props.item.location}</span></p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h3>{props.item.title}</h3>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>



        </div>
    )
}
