
import "./product-card.scss"

const Card = ({product, bestProduct}) => {
    const {name, country, price } = product;
    let classNames = "card-wrapper ";
    if (bestProduct){
        classNames+="best ";
    } 

    //when clicked, lift name to the app and render full product page

    return (
        <div className={classNames}>
            <div className="card-img">
                <img src={require("../../static/img/aromistico-cb.png")} alt="aromostico" />
                {/* <img src={require (image)} alt="aromostico" /> */}
            </div>
            <div className="card-name">{name}</div>
            <div id="country" className="card-country">{country}</div>
            <div className="card-price">{price}$</div>
        </div>
    );
}

export default Card;