import { Outlet, Link } from "react-router-dom";

import './app.scss'

const App = () => {
    const products = [
        {name: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: 10.73, description: '', best: true},
        {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: 15.99, description: '', best: true},
        {name: '', country: '', price: '', description: '', best: true},
        {name: '', country: '', price: '', description: '', best: false},
        {name: '', country: '', price: '', description: '', best: false},
        {name: '', country: '', price: '', description: '', best: false},
        {name: '', country: '', price: '', description: '', best: false},

    ]

    return(
        <>
            <nav className="menu">
                <ol>
                    <li className="logo">
                        
                        <Link to={"/"}>
                            <img src={require("../../static/icons/beans-nocolor.png")} alt="beans-logo" className="logo-img" />
                            Coffee house
                        </Link>
                    </li>
                    <li>
                        <Link to={"coffee"}>Our coffee</Link>
                    </li>
                    <li>
                        <Link to={"goods"}>For your pleasure</Link>
                    </li>
                </ol>
            </nav>

            <div className="page">
                <Outlet/>
            </div>
        </>
    )
    
}

export default App;
