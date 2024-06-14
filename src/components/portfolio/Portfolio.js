import "./Portfolio.css"
import Slider from "../../img/sidebar.png"
import Ecomerce from "../../img/ecommerce.png"
import Hoc from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"
function Portfolio() {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>



        {/* slider */}


        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
            <SwiperSlide>
                <img src={Slider} alt=""/>

            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecomerce} alt=""/>

            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt=""/>

            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt=""/>

            </SwiperSlide>
        </Swiper>

        

        
      
    </div>
  )
}

export default Portfolio
