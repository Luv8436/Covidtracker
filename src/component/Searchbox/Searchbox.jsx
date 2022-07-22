import React from 'react'
import './Searchbox.css'


const Searchbox = (props) => {
    return (
        <div className="search-container">
            <form onSubmit={function(event){getDetail(event , props.getCovidData)}} action="">
                <input onChange={(event) => props.onInputChange(event.target.value)} 
                className="search-text" type="text" 
                placeholder="Enter country Name" required />
                <input className="submit-btn" type="submit" value="Search" />
            </form>
        </div>
    )
}
const getDetail = (event , getCovidData) => {
    let country = event.target[0].value;
    event.preventDefault();

    
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'b3b45b8423msh6360b2994d663b4p1c7b49jsn3ff44b7de71c',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
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