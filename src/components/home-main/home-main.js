
import About from "../about/about";
import ProductList from "../product-list/product-list";

import './home-main.scss';

const HomeMain = (props) => {
    const {products, onShow} = props;
    

    return(
        <main>
            <div className="home-about">
                <About 
                    title={'About Us'}
                    text={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.<br /><br />Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as  horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.'}
                />
            </div>
            <div className="home-best">
                <h2 className="home-best__title">Our best</h2>
                    <ProductList
                        products={products}
                        best={true}
                        onShow={onShow}/>
            </div>
        </main>
    )
}

export {HomeMain};