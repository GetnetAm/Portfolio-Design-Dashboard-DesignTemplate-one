import "./works.css"
import Upworks from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png"
function Works() {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & clients</span>

            <span>
             this portfolio is Design by getware Technology you 
             <br />
             can you can chang and use it
             <br />
             this is best portfolio for every department
             <br />

             you can edit and change the code buy this sample code littel $
            </span>

            <button className="button s-button">Hire Me</button>

            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>

        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upworks} alt=""/>

                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt=""/>

                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt=""/>

                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt=""/>

                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt="" />

                </div>

            </div>

            {/* background Circles */}

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>
      
    </div>
  )
}

export default Works
