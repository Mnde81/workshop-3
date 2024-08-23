

function Card(props) {
    return (
        <>
        <h1>{props.name}</h1>
        <p>Price: {props.number}</p>
        <p>Is active: {props.isActive ? "Active" : "Is not Active"} </p>
        </>
    )
  
    

}


export default Card;