import { Link } from 'react-router-dom'
import { useState } from 'react'

import Tcp_ip from '../../../assets/icon/icon_tcp_ip.svg'
import Banco_dados from '../../../assets/icon/icon_bd.svg'
import Sebrae from '../../../assets/icon/icon_emprendedor.svg'
import White from '../../../assets/icon/icon_whiteBelt.svg'
import Scrum from '../../../assets/icon/icon_scrum.svg'
import ReactFirebase from '../../../assets/icon/icon_react.svg'
import Redes from '../../../assets/icon/icon_manutencao.svg'
import Super from '../../../assets/icon/icon_supervisao.svg'
import './btn_course.css'

function Btn_Course(){
        // Abre menu oculto em um botão na linha 25 estrutura de decisão
        const [x, setX] = useState(true);
        const open = () => {
            setX(!x)
          
        }   
        return(
            <div className='btn_span'>
                <button onClick={open} className='btn' style={{color:'black', fontSize:'1.5rem'}}>
                    Certificados
                    {!x &&(
                    <div>
                         <div className='container_btn'>
                            <div className='close'> <h4> X </h4></div>
                           
                            <h2 className='btn_tlite'>Certificados</h2>
                            <div className="btn_navigatin">
                                                                  
                                    <div className="list">
                                        <Link to="/architectere">
                                            <span className="icon"><img src={Redes} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link className='link' to="/architectere">
                                            <span className="list_link" >Arquitetura de redes</span>
                                        </Link>
                                    </div>

                                    <div className='list'>
                                       <Link to="/">
                                            <span className="icon"><img src={Tcp_ip} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/">
                                            <span className="list_link">Redes TCP / IP</span>
                                        </Link>
                                    </div>

                                    <div className="list">
                                        <Link to="/scrum">
                                            <span className="icon"><img src={Scrum} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/scrum">
                                            <span className="list_link">Scrum Master</span>
                                        </Link>
                                    </div>

                                    <div className="list">
                                        <Link to="/reactFarebase">
                                            <span className="icon"><img src={ReactFirebase} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/reactFarebase">
                                            <span className="list_link">React mais Firebase</span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/">
                                            <span className="icon"><img src={Sebrae} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/">
                                            <span className="list_link">Emprendedorismo Sebrae</span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/bancoSql">
                                            <span className="icon"><img src={Banco_dados} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/bancoSql">
                                            <span className="list_link">Banco de Dados MySQL</span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/">
                                            <span className="icon"><img src={Super} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/">
                                            <span className="list_link">Supervisão</span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/whiteBalt">
                                            <span className="icon"><img src={White} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="list">
                                        <Link to="/whiteBalt">
                                            <span className="list_link">White Belt</span>
                                        </Link>
                                    </div> 
                            </div>
                    </div>
                    </div>)   
                    }
                </button>
            </div>
        )
}

export default Btn_Course