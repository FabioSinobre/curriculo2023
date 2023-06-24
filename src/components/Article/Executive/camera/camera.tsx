import CameraImg from "../../../../assets/fotos/Slide28.jpg"

import Header from "../../../Header/header"
import Footer from "../../../Footer/footer"
import '../../../courses/courses.css'


function Camera(){
    return(
        <>
        <Header/>
        <div className="container_course">
            <img className="img_course" src={CameraImg} alt="" />
        </div>
        <Footer/>
        </>
    )
}

export default Camera