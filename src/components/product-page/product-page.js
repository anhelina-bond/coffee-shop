
import { Divider } from '../divider';

import './product-page.scss';

const ProductPage =(props) => {
    const {country, description, price} = props.product;
    return(
        <>
            <div className="product-wrapper">
                <div className="product-img">
                    <img src={require('../../static/img/aromistico-poster.jpg')} alt="product-poster" />
                </div>
                <div className="product-descr">
                    <div className="product-descr__about">About it</div>
                        <Divider>
                            <img src={require("../../static/icons/beans-black.png")} alt="beans-logo" />
                        </Divider>
                    <div className="product-descr__country">
                        <span>Country: </span>
                        {country}
                    </div>
                    <div className="product-descr__text">
                        <span>Description: </span>
                        {description}
                    </div>
                    <div className="product-descr__price">
                        <span>Price: </span>
                        {price}$
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductPage;