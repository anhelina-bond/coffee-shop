import {Link} from "react-router-dom";
import './home.scss'

const Home =() => {
    return(
        <>
            <header className="home-header">
                <h1 className="header">Everything You Love About Coffee</h1>
                <div className="divider">
                    {/* <img src="/../../static/img/main-bg.jpg" alt="main-background" /> */}
                    <img src="/../../static/icons/beans-white.png" alt="beans-logo" />
                </div>
                <p className="subheader">We makes every day full of energy and taste <br />Want to try our beans?</p>
                <Link to={"coffee"} className="btn">More</Link>
            </header>
        </>
    )
}

export default Home;