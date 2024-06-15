import "./Services.css"
import HearEmogi from "../../img/heartemoji.png";
import Glass from "../../img/glasses.png";
import Card from "../card/Card";
import Resume from "../document/resume.pdf"


function Services() {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>

            <span>this is job finder portfolio desigd by Getware Technoloy you can download and use it 
            <br />
            designed by Getware Technology
            </span>
            <a href={Resume}>
            <button className="button s-button ">Download Cv</button>
            </a>

            <div className="blur s-blurl" style={{background: "#abf1ff94"}}>

            </div>
           
        </div>

        {/* right side */}
        <div className="cards">
          <div style={{left: '14rem'}}>
            <Card
            emoji= {HearEmogi}
            heading={'Design'}
            details={"Figma, Sketch Photoshop, Adobe xd"}
            />
          </div>
          <div style={{left: '14rem'}}>
            <Card
            emoji= {HearEmogi}
            heading={'Design'}
            details={"Figma, Sketch Photoshop, Adobe xd"}
            />
          </div>
          <div style={{top:"12rem", left: '-7rem'}}>
            <Card
            emoji= {HearEmogi}
            heading={'Design'}
            details={"Figma, Sketch Photoshop, Adobe xd"}
            />
          </div>

          <div style={{top:"19rem", left: '12rem'}}>
            <Card
            emoji= {HearEmogi}
            heading={'Design'}
            details={"Figma, Sketch Photoshop, Adobe xd"}
            />
          </div>
        


        </div>
      
    </div>
  )
}

export default Services
