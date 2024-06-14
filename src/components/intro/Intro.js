import "./intro.css"

import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy I am </span>
            <span>Getnet Amsalu</span>
            <span>FullStack Developer with high level of experience in 
                web designing and development, producting the 
                quality work
            </span>

        </div>


        <button className="button i-button">Hire Me</button>

        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />

        </div>

        </div>

        <div className="i-right">
            I am right hire

        </div>
      
    </div>
  )
}

export default Intro
