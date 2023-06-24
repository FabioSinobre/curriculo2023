import Green from "../../../assets/img_courses/greenBelt01.png"
import Green2 from '../../../assets/img_courses/greenBelt02.png'

import Header from "../../Header/header"
import Footer from "../../Footer/footer"
import "../courses.css"

function CourseReactFirebase(){
    return(
        <>
        <Header/>
        <div className="container_course">
            <img className="img_course" src={Green} alt="Certificado do curso de React mais Firebase" />
            <img className="img_course" src={Green2} alt="Certificado do curso de React mais Firebase" />
        </div>
        <Footer/>
        </>
    )
}

export default CourseReactFirebase