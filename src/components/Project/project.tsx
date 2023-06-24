import './project.css'

import Alert_construct from '../../assets/drawable/alert_construct.png'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Project(){
    return(
        <>
        <Header/>
        <div className="container_course">
            <div className="conteiner_project">
                <h2>Desculpa</h2>
                <h2>Página em construção ! ! !</h2>
                <div className='alert'>
                <div>
                    <img src={Alert_construct} alt='imagem da página em construção' />
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Project