import './Result.css'
import Item from '../Item/Item'

const Result = ({results , isFetching}) => {
    if(isFetching){
        return null;
    }else{
        return (
            <div className="result-container" >
                <Item title={"Population"} data={results['response'][0]['population']} />
                <Item title={"Deaths"} data={results['response'][0]['deaths']['total']} />
                <Item title={"Recovered"} data={results['response'][0]['cases']['recovered']} />
                <Item title={"Active Cases"} data={results['response'][0]['cases']['active']} />
                <Item title={"Tests"} data={results['response'][0]['deaths']['total']} />
                <Item title={"Cases"} data={results['response'][0]['cases']['total']} />
                
            </div>
        )
    
    }
}


export default Result;