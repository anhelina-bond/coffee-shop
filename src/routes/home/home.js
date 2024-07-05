import {Link, useOutletContext} from "react-router-dom";

import {Divider} from "../../components/divider"
import {HomeMain} from "../../components/home-main/home-main";

import './home.scss'


const Home = () => {
    const [products] = useOutletContext();
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
            <HomeMain 
                products={products}/>        
            

        </>
    )
}

export default Home;