import React from 'react'
import './Searchbox.css'


const Searchbox = (props) => {
    return (
        <div className="search-container">
            <form onSubmit={function(event){getDetail(event , props.getCovidData)}} action="">
                <input onChange={(event) => props.onInputChange(event.target.value)} 
                className="search-text" type="text" 
                placeholder="Enter country Name" />
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    )
}
const getDetail = (event , getCovidData) => {
    let country = event.target[0].value;
    event.preventDefault();
    fetch(`https://covid-19-v1.p.rapidapi.com/v1/countries?sortby=Cases&country=${country}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "b3b45b8423msh6360b2994d663b4p1c7b49jsn3ff44b7de71c",
            "x-rapidapi-host": "covid-19-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        getCovidData(data)
    })
    .catch(err => {
        console.error(err);
    });
}


export default Searchbox;