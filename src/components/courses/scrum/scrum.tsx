import Course from "../../../assets/img_courses/CursoPreparatorioScum.jpg"

import "../courses.css"

function CourseReactFirebase(){
    return(
        <>
        <div className="container_course">
            <img className="img_course" src={Course} alt="Certificado do curso de React mais Firebase" />
        </div>
        </>
    )
}

export default CourseReactFirebase