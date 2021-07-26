import './Result.css'
import Item from '../Item/Item'

const Result = ({results}) => {
    
    if(results.code === 200 && results['data'].message === "Country not found or doesn't have any cases"){
        return(
            <div className="result-container">
                <Item title={"Country not found"} data={"NA"} />
            </div>
        )
    }
    else if( results.code === 200){
        return (
            <div className="result-container" >
                <Item title={"Population"} data={results['data']['population']} />
                <Item title={"Deaths"} data={results['data']['deaths']} />
                <Item title={"Recovered"} data={results['data']['recovered']} />
                <Item title={"Active Cases"} data={results['data']['active']} />
                <Item title={"Tests"} data={results['data']['tests']} />
                <Item title={"Cases"} data={results['data']['cases']} />
                
            </div>
        )
    
    }else{
        return (
            <div></div>
        )
    }
}


export default Result;