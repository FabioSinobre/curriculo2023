import {Link} from 'react-router-dom'

import Summary01 from './Executive/summary_01'
import IfSP from '../../assets/drawable/ifsp.png'
import Univesp from '../../assets/drawable/univesp.jpg'
import Couses_img from '../../assets/pena_ico.png'
import './article.css'


function Article(){

    return(
       <>
        <div className='main_article'>
        <div className='curriculum'><h1>Curriculo</h1></div>
            <Summary01/>
            <div className="training">
                <span className="university">
                    <h2>Formação Acadêmica</h2>
                    <div className='img_university'><img src={Univesp} alt="" /></div>
                    <p>Bacharel em Engenharia da Computação, UNIVESP (Universidade Virtual do Estado de São Paulo). </p>
                    <p>Av. Prof. Almeida Prado, 532 – Butantã, São Paulo, SP  jul. 2018 – jul. 2023 </p>
                    <br /><hr />
                    <div className='ementa'><a href="https://univesp.br/sites/58f6506869226e9479d38201/assets/5947e3fa69226ee825baf576/MatrizCurricular_EngenhariaCOMPUTA__O.pdf ">
                        <h4>Matriz curricular UNIVESP 2018</h4></a></div>
                    <hr /><br />
                    <div className='img_university'><img src={IfSP} alt="" /></div>
                    <p>Licenciatura em Física, IF-SP (Instituto Federal de São Paulo). </p>
                    <p>R. Pedro de Toledo, 625 – Canindé, São Paulo, SP  jul. 2008 – incompleto </p>
                </span>
                <span className="courses">
                    <h2>Cursos</h2>
                    <div className='img_courses'><img src={Couses_img} alt="" /></div>
                    <nav className='Menu_courses'>
                        <ul>
                            <li>Arquitetura de Redes<Link className='course' to="/architectere">clique aqui</Link> </li>
                            <li>Redes TCP/IP 2023</li>
                            <li>Green Belt 2023 <Link to='/GreenBelt'>clique aqui</Link></li>
                            <li>White Belt 2022 <Link to="/whiteBalt">clique aqui</Link></li> 
                            <li>Preparatório Scrum Master <Link to='/scrum'>clique aqui</Link> </li>
                            <li>React.js com Firebase<Link to='/reactFarebase'>clique aqui</Link> </li>
                            <li>Emprendorismo SEBRAE / CREA-SP</li>
                            <li>Banco de Dados MySQL 2021 <Link to='/bancoSql'>clique aqui</Link> </li>
                            <li>Desenvolvimento e Supervisão 2019</li>
                            <li>Apache Camel <Link to='/apacheCamel'>clique aqui</Link> </li>
                        </ul>
                    </nav>
                </span>
            </div>
            
            <div className='project'>
            <div className="books"><h4>Projetos</h4></div>
             <p >Robô 4N69 desenvolvido no Projeto integrador <a href="https://affectionate-khorana-bb7c5a.netlify.app/">Acesso aqui</a></p>
             <p>Semana React da DevSuperior apresenta um dashbord <a href="https://dsvendas-sinobre.netlify.app/"> Acesso aqui</a></p>
            </div>
        </div>
        
       </>
    )
}

export default Article