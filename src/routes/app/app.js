import { Outlet, Link } from "react-router-dom";

import {Footer} from "../../components/footer/footer"

import './app.scss'

const App = () => {
    const products = [
        {name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: 10.73, description: '', best: true, image: "../../static/img/solimo-cb.png"},
        {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 15.99, description: '', best: true, image: "../../static/img/presto-cb.png"},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: '', best: true, image: "../../static/img/aromistico-cb.png"},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: '', best: false, image: "../../static/img/aromistico-cb.png"},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: '', best: false, image: "../../static/img/aromistico-cb.png"},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: '', best: false, image: "../../static/img/aromistico-cb.png"},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: '', best: false, image: "../../static/img/aromistico-cb.png"},

    ]

    return(
        <>
            <nav className="menu">
                <ol className="menu-list">
                    <li className="menu-list__item logo">
                        
                        <Link to={"/"}>
                            <img src={require("../../static/icons/beans-nocolor.png")} alt="beans-logo" className="logo-img" />
                            Coffee house
                        </Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to={"coffee"}>Our coffee</Link>
                    </li>
                    <li className="menu-list__item">
                        <Link to={"goods"}>For your pleasure</Link>
                    </li>
                </ol>
            </nav>

            <div className="page">
                <Outlet context={[products]}/>
            </div>

            <Footer/>
        </>
    )
    
}

export default App;
