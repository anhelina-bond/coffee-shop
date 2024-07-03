import { Link } from "react-router-dom";

import { Divider } from '../divider';

import './footer.scss'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="menu">
                    <ol className="menu-list black">
                        <li className="menu-list__item logo">
                            
                            <Link to={"/"}>
                                <img src={require("../../static/icons/beans-nocolor-black.png")} alt="beans-logo" className="logo-img" />
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
                </div>
                <Divider>
                    <img src={require("../../static/icons/beans-black.png")} alt="beans-logo" />
                </Divider>
            </footer>
        </>
    );
}

export {Footer};