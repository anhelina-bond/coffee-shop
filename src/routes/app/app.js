import { Outlet, Link } from "react-router-dom";

import './app.scss'

const App = () => {
    return(
        <>
            <nav>
                <ol>
                    <li>
                        
                        <Link to={"/"}>
                            <img src="/../../static/icons/beans-nocolor.png" alt="beans-logo" />
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
