import React from 'react'

const Weather = (props) => {
    return (
        <div className="container">
            <div className="cadrs" style={{justifyContent : "center" , display : "grid"}}>
                <h2>{props.city}</h2>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <div style={{display : "flex"}}>{props.temp_celsius ? (<h1 className='py-2'>{props.temp_celsius}&deg;</h1>) : null}</div>
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-4">{props.description}</h4>
            </div>
        </div>
    )

}
function minmaxTemp(min, max) {

    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}
export default Weather;