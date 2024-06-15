import "./footer.css"
import Wave from "../../img/wave.png"
function Footer() {
  return (
    <div className="footer">
        <img src={Wave}  alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>getnetamsalu2119@gmail.com</span>
            <div className="f-icons">
            <i class="fa-brands fa-facebook" ></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
