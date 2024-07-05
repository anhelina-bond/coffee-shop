import Card from '../product-card/product-card';

import './product-list.scss';

const ProductList =({best, products})=> {

    const makeList=(best)=> {
        if(best) {
            return products.filter(item => item.best).map((product)=>{
                return  (
                    <Card 
                        product={product}
                        bestProduct={true}/>
                ) ;
            });
        }
        return products.map((product)=>{
            return  (
                <Card 
                    product={product}
                    bestProduct={false}/>
            ) ;
        });
    }
    return (
        <>
            <div className="list-wrapper">
                {makeList(best)}
            </div>
        </>
    )
}

export default ProductList;