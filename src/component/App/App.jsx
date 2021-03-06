import React from 'react';
import './App.css'
import Searchbox from '../Searchbox/Searchbox';
import Header from '../Header/Header';
import Result from '../Results/Result'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogoExpanded : true,
            data : {},
            isFetching : true,
        }
    }
    handleInputChange = (text) => {
        this.setState({
            isLogoExpanded : text.length>0 ? false : true,
        })
        if(text.length===0){
            this.setState({
                data : {},
                isFetching : true,
            })
        }
    }

    setData = (covidData) => {
        console.log(covidData)

        if(covidData['response'].length===0){
            this.setState({
                data : [],
                isFetching : true,
            })

            return;
        }
        this.setState({
            data : covidData,
            isFetching : false,
        })
    }

    render() {
        return (
            <div className="app-container" >
                <Header isLogoExpanded={this.state.isLogoExpanded} />
                <Searchbox getCovidData={this.setData} onInputChange={this.handleInputChange} />
                <Result results={this.state.data} isFetching={this.state.isFetching}/>
            </div>
        )
    }
}

export default App;