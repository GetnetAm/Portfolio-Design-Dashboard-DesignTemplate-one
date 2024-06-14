import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import ProfilePic1 from "../../img/profile1.jpg"
import ProfilePic2 from "../../img/profile2.jpg"
import ProfilePic3 from "../../img/profile3.jpg"
import ProfilePic4 from "../../img/profile4.jpg"
import { Pagination } from "swiper/modules"
import 'swiper/css/pagination'
import "swiper/css"

function Testimonial() {

 const clients=[

        {
            img: ProfilePic1,
            revew:
            "is a vital concept in portfolio management. ",
            

        },
        {
            img: ProfilePic2,
            revew:
            "is a vital concept in portfolio management.is a vital concept in portfolio management. ",
            

        },
        {
            img: ProfilePic3,
            revew:
            "is a vital concept in portfolio management. is a vital concept in portfolio management.",
            

        },
        {
            img: ProfilePic4,
            revew:
            "is a vital concept in portfolio management.is a vital concept in portfolio management. ",
            

        },
    ]

  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me.......</span>

        <div className="blur t-blurl" style={{background:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background:"skyblue"}}></div>

        </div>

        {/* slider */}
        <Swiper 
        modules={{Pagination}}
        slidesPerView={1}
        pagination={{clickable: true}}>
         {
            clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                      <div className="testimonial">
                      <img src={client.img} alt="" />
                      <span>{client.revew}</span>

                      </div>

                    </SwiperSlide>
                )
            })
         }
        </Swiper>
      
    </div>
  )
}

export default Testimonial
