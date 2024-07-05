
import "./product-card.scss"

const Card = (props) => {
    const {name, country, price, bestProduct, onShow}= props;
    let classNames = "card-wrapper ";
    if (bestProduct){
        classNames+="best ";
    } 

    return (
        <li className={classNames}
            onClick={onShow}>
            <div className="card-img">
                <img src={require("../../static/img/aromistico-cb.png")} alt="aromostico" />
                {/* <img src={require (image)} alt="aromostico" /> */}
            </div>
            <div className="card-name">{name}</div>
            <div id="country" className="card-country">{country}</div>
            <div className="card-price">{price}$</div>
        </li>
    );
}

export default Card;