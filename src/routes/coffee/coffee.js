import {Component} from 'react';
import {useOutletContext} from "react-router-dom";

import { CoffeeMain } from '../../components/coffee-main/coffee-main';
import ProductPage from '../../components/product-page/product-page';

import './coffee.scss'

class CoffeeInner extends Component {
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
        return <CoffeeMain
            products={this.props.products}
            onShow={this.onShow}/>
    }

    render() {
        const fragment = this.showFragment(this.state.id)
        return(
            <>
                <header className='coffee-header'>
                    <h1 className="title">Our Coffee</h1>                    
                </header>
                {fragment}
            </>
        )
    }
    
}

const Coffee =() => {
    const [products] = useOutletContext();

    return <CoffeeInner products={products}/>
}

export default Coffee;