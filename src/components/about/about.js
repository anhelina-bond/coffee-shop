
import { Divider } from "../divider"

import "./about.scss"

const About = ({title, text}) => {
    return(
        <>
            <h2 className="about-title">{title}</h2>
            <Divider>
                <img src={require("../../static/icons/beans-black.png")} alt="beans-logo" />
            </Divider>
            <div dangerouslySetInnerHTML={{ __html: text }} className="about-text" />
        </>
        
    )
    
}

export default About;