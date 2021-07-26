import './Item.css'
let Item = (props) => {
    if(props.data !== undefined){
        return (
            <div className="result-item">{`${props.title} : ${props.data}`}</div>
        )
    }
}

export default Item;