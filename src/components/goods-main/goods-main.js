import { Component } from "react";

import About from "../about/about";
import ProductList from "../product-list/product-list";

import '../coffee-main/coffee-main.scss';

const GoodsMain = (props) => {
    const {products, onShow} = props;  
        
        return(
            <main>
                <div className="coffee-about">
                    <div className="coffee-about__wrapper">
                        <img src={require("../../static/img/cup.png")} alt="coffee" className="coffee-about__image" />
                        <About
                            title={'About our goods'}
                            text={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/> As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'}
                        />
                    </div>
                    
                    <div className="coffee-list">
                        <ProductList
                            products={products}
                            best={false}
                            onShow={onShow}
                            />
                    </div>
                </div>            
            </main>
        )
}

export default GoodsMain;