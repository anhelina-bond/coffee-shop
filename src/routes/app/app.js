import { Outlet, Link } from "react-router-dom";

import {Footer} from "../../components/footer/footer"

import './app.scss'

const App = () => {
    const products = [
        {name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: 10.73, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: true, image: "../../static/img/solimo-cb.png",key: 1},
        {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 15.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: true, image: "../../static/img/presto-cb.png",key: 2},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: true, image: "../../static/img/aromistico-cb.png",key: 3},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: false, image: "../../static/img/aromistico-cb.png",key: 4},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: false, image: "../../static/img/aromistico-cb.png",key: 5},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: false, image: "../../static/img/aromistico-cb.png",key: 6},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', best: false, image: "../../static/img/aromistico-cb.png",key: 7},

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
