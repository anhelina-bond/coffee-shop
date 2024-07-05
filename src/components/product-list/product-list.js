import Card from '../product-card/product-card';

import './product-list.scss';

const ProductList =({best, products, onShow})=> {

    const makeList=(best)=> {
        if(best) {
            return products.filter(item => item.best).map(({key, ...itemProps})=>{
                return  (
                    <Card 
                        key = {key}
                        {...itemProps}
                        bestProduct={true}
                        onShow ={(e) =>{onShow(key)}}/>
                ) ;
            });
        }
        return products.map(({key, ...itemProps})=>{
            return  (
                <Card 
                    key = {key}
                    {...itemProps}
                    bestProduct={false}
                    onShow ={(e) =>{onShow(key)}}/>
            ) ;
        });
    }
    return (
        <>
            <ul className="list-wrapper">
                {makeList(best)}
            </ul>
        </>
    )
}

export default ProductList;