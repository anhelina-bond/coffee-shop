import { Component } from 'react';
import {useOutletContext} from "react-router-dom";

import ProductPage from '../../components/product-page/product-page';
import GoodsMain from '../../components/goods-main/goods-main';

import './goods.scss';

class GoodsInner extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: -1
        }
    }

    onShow =(id)=> {
        this.setState({id});
    }

    showFragment =(id) => {
        if(id!==-1) {
            const target = this.props.products.find(item => item.key === id);
            return (<ProductPage
                product={target}/>);
        }
        return <GoodsMain
            products={this.props.products}
            onShow={this.onShow}/>
    }

    render() {
        const fragment = this.showFragment(this.state.id)
        return(
            <>
                <header className='coffee-header goods-header'>
                    <h1 className="title">Our Goods</h1>                    
                </header>
                {fragment}
            </>
        )
    }
}

const Goods =() => {
    const [products] = useOutletContext();
    return <GoodsInner products = {products}/>
}

export default Goods;