import {Component} from 'react';
import {Link, useOutletContext} from "react-router-dom";

import {Divider} from "../../components/divider"
import {HomeMain} from "../../components/home-main/home-main";
import ProductPage from '../../components/product-page/product-page';

import './home.scss'

class HomeInner extends Component {
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
        return <HomeMain 
            products={this.props.products}
            onShow={this.onShow}/> 
    }

    render() {
        const fragment = this.showFragment(this.state.id)
        return(
            <>
                <header className="home-header">
                    <h1 className="title">Everything You Love About Coffee</h1>                    
                    <Divider $white>
                        <img src={require("../../static/icons/beans-white.png")} alt="beans-logo" />
                    </Divider>
                    <p className="subtitle">We makes every day full of energy and taste <br />Want to try our beans?</p>
                    <Link to={"coffee"} className="home-btn">More</Link>
                </header>
                {fragment}
                
    
            </>
        )
    }
}

const Home = () => {
    const [products] = useOutletContext();
    return <HomeInner products={products}/>
}

export default Home;