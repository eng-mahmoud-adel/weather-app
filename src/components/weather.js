import React from 'react';

const Weather = (props) => {
    return(
        <div className= "weather">
            {
                props.tempreature && <p>Tempreature: {props.tempreature}</p>
            }

            {
                props.city && <p>City: {props.city}</p>
            }

            {
                props.country && <p>Country: {props.country}</p>
            }

            {
                props.humidity && <p>Humidity: {props.humidity}</p>
            }

            {
                props.desciption && <p>Desciption: {props.desciption}</p>
            }

            {
                props.error && <p>Error: {props.error}</p>
            }
        </div>
    )
}

export default Weather;