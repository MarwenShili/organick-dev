function Card(props) {
    console.log('props :>> ', props);
    return (
        <div>
       {props.value.name}
        </div>
    ) 
}
export default Card; 