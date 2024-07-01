import { Outlet, Link } from "react-router-dom";

import './app.scss'

const App = () => {
    return(
        <>
            <nav>
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

            <main>
                <Outlet/>
            </main>
        </>
    )
    
}

export default App;
