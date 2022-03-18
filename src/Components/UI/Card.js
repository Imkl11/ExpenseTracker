import "./Card.css";
// Instead of function declration we can use arrow function and the syntax is here
const Card=(props)=>{
    const clasess="card "+props.className;
    return <div className={clasess}>{props.children}</div>
};



export default Card;
