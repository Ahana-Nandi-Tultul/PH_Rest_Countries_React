import React from 'react';
import "./Country.css";

const Country = (props) => {
    const {name, flags, population, region, area} = props.country;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" srcset="" />
            <p><small>Area: {area}</small></p>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;