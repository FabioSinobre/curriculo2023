import Course from "../../../assets/img_courses/CursoPreparatorioScum.jpg"

import Header from "../../Header/header"
import Footer from "../../Footer/footer"
import "../courses.css"

function CourseReactFirebase(){
    return(
        <>
        <Header/>
        <div className="container_course">
            <img className="img_course" src={Course} alt="Certificado do curso de React mais Firebase" />
        </div>
        <Footer/>
        </>
    )
}

export default CourseReactFirebase