import "./intro.css"

import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import Crown from "../../img/crown.png"
import glassesImoji from "../../img/glassesimoji.png"
import gc1 from "../../img/gc.jpg"
import gc2 from "../../img/gc2.jpg"
import gcone from "../../img/gcone.svg"
import FloatingDev from "../floatingDiv/FloatingDev"
import thumbup from '../../img/thumbup.png'

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
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={gc2} alt="" className="gc_image" />
        <img src={glassesImoji} alt="" />
        <div style={{top: '-4%', left:'68%'}}>
            <FloatingDev image={thumbup} txt1="Best Design" txt2="Award"/>

        </div>

        <div style={{top: "18rem", left:"0rem"}}>
        <FloatingDev image={Crown} txt1="Web" txt2="Developer"/>
        </div>

        <div className="blur" 
        style={{
            background:"#c1f5ff",
            top: "17rem",
            width:"21rem",
            height:"11rem",
            left:"-9rem"

            }}>



        </div>


        </div>
      
    </div>
  )
}

export default Intro
