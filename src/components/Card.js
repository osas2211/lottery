import { Link } from "react-router-dom"
const Card = (props) => {

    return (
        <div className={props.cardClass}>
            <div className={props.cardImgClass}>
                <img src={props.img} alt="basic" srcSet=""></img>
            </div>
            <p className="amount">${props.amount}</p>
            <p>{props.title}</p>
            <Link to={props.link} className="play btn">Play</Link>
        </div>
    )
}

export default Card;