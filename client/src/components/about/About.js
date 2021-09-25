import "./about.css"
import zenith from '../images/images/IMG_3571.JPG'

const About = () => {
    return (
        <div className="about">
            <div className="aboutWrapper">
                <p className="aboutWrapperTxt">This is a base project aimed at taking the attendance of students in schools and also in their various classses with the aid of the arduino cloud</p>
                <p className="those">those involved</p>
                <div className="thoseWrapper">
                    <div className="thoseInvolved">
                        <img src={zenith} alt="" className="thoseInvolvedImg"/>
                        <div className="thoseInvolvedDec">
                            <p className="thoseInvolvedName">Njapoum Ketsia</p>
                            <p className="thoseDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ullam fugit voluptate optio voluptatum et nisi dignissimos reiciendis eius aut!</p>
                        </div>
                    </div>
                    <div className="thoseInvolved">
                        <img src={zenith} alt="" className="thoseInvolvedImg"/>
                        <div className="thoseInvolvedDec">
                            <p className="thoseInvolvedName">Tomoh Claude</p>
                            <p className="thoseDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ullam fugit voluptate optio voluptatum et nisi dignissimos reiciendis eius aut!</p>
                        </div>
                    </div>
                    <div className="thoseInvolved">
                        <img src={zenith} alt="" className="thoseInvolvedImg"/>
                        <div className="thoseInvolvedDec">
                            <p className="thoseInvolvedName">Ngoh Precious</p>
                            <p className="thoseDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ullam fugit voluptate optio voluptatum et nisi dignissimos reiciendis eius aut!</p>
                        </div>
                    </div>
                    <div className="thoseInvolved">
                        <img src={zenith} alt="" className="thoseInvolvedImg"/>
                        <div className="thoseInvolvedDec">
                            <p className="thoseInvolvedName">Ashu Junior</p>
                            <p className="thoseDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ullam fugit voluptate optio voluptatum et nisi dignissimos reiciendis eius aut!</p>
                        </div>
                    </div>
                    <div className="thoseInvolved">
                        <img src={zenith} alt="" className="thoseInvolvedImg"/>
                        <div className="thoseInvolvedDec">
                            <p className="thoseInvolvedName">Zenith Miles</p>
                            <p className="thoseDec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ullam fugit voluptate optio voluptatum et nisi dignissimos reiciendis eius aut!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
