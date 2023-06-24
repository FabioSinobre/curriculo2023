import Course from "../../../assets/img_courses/white_belt01.png"
import Course02 from "../../../assets/img_courses/white_belt02.png"

import Header from "../../Header/header"
import Footer from "../../Footer/footer"
import "../courses.css"

function CourseReactFirebase(){
    return(
        <>
        <Header/>
        <div className="container_course">
            <img className="img_course" src={Course} alt="Certificado do curso de React mais Firebase" />
            <img className="img_course" src={Course02} alt="Certificado do curso de React mais Firebase" />
        </div>
        <Footer/>
        </>
    )
}

export default CourseReactFirebase