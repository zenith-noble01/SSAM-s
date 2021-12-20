import "./members.css"
import zenith from '../images/zenith.png'
import ketsia from '../images/ketsia.png'
import precious from '../images/pic-1.png'

const Members = () => {
    return (
        <div className="members" id="members">
             <h1 class="heading"> <span>our</span> Members </h1>
           <div className="members__wrapper">
               <div className="wrapper__leftside">
                  <div className="leftside__container">
                      <div className="top__left__Container">
                        <img src={ketsia} alt="" />
                      </div>
                      <div className="bottom__left_container">
                          <p className="member__name">Njapoum Ketsia</p>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam placeat nostrum error, quasi vero! Nihil ipsum vero est et accusantium quae maxime dicta, quam atque debitis, non ad quod labore neque corrupti minima ex veritatis similique nemo voluptas! Aperiam labore unde harum. Ullam debitis rerum et ab quam incidunt?</p>
                      </div>
                  </div> 
               </div>
               <div className="wrapper__Rightside">
                   <div className="members__rightside__wrapper">
                       <div className="member__content">
                           <div className="content__top">
                               <img src={precious} alt="" />
                           </div>
                           <div className="content__bottom">
                            <p className="member__name">Ngoh Precious</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quam atque debitis, non ad quod labore neque corrupti minima ex veritatis similique nemo voluptas! Aperiam labore unde harum. Ullam debitis rerum et ab quam incidunt </p>
                           </div>
                       </div>
                       <div className="member__content">
                           <div className="content__top">
                               <img src={zenith} alt="" />
                           </div>
                           <div className="content__bottom">
                            <p className="member__name">Tomoh Claude</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quam atque debitis, non ad quod labore neque corrupti minima ex veritatis similique nemo voluptas! Aperiam labore unde harum. Ullam debitis rerum et ab quam incidunt </p>
                           </div>
                       </div>
                       <div className="member__content">
                           <div className="content__top">
                               <img src={zenith} alt="" />
                           </div>
                           <div className="content__bottom">
                            <p className="member__name">Ashu Junior</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quam atque debitis, non ad quod labore neque corrupti minima ex veritatis similique nemo voluptas! Aperiam labore unde harum. Ullam debitis rerum et ab quam incidunt </p>
                           </div>
                       </div>
                       <div className="member__content">
                           <div className="content__top">
                               <img src={zenith} alt="" />
                           </div>
                           <div className="content__bottom">
                            <p className="member__name">Developer@Miles</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. quam atque debitis, non ad quod labore neque corrupti minima ex veritatis similique nemo voluptas! Aperiam labore unde harum. Ullam debitis rerum et ab quam incidunt </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Members
