import { useState } from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../assets/drawable/logo_foto.png'
import Btn_Course from './Btn_courses/btn_course'

import './header.css'


function Header() {

    const [active, setMode] = useState(true);
    const ToggleMode = () => {
        setMode(!active)
    }
      return (
        <div className='board'>

            <div id="network" className='network'>
                    <div className={active ? 'section_toggle' : 'section_toggle on'}>
                        <div className="menu_toggle" onClick={ToggleMode}>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                        <nav id="nav_network">
                            <a href="https://www.linkedin.com/in/f%C3%A1bio-sinobre/">Linkedin</a>
                            <a href="https://github.com/FabioSinobre">GitHab</a>
                            <a href="https://www.youtube.com/channel/UCy2610L61Kj5_HPiYhnZcgg">Youtube</a>
                            <a href="https://api.whatsapp.com/send?phone=5511981173862&text=Ol%C3%A1%2C%20obrigado%20por%20entrar%20em%20contato">WhatsApp</a>
                        </nav>
                    </div>
            </div>

            <div className='title'>
                <h1>Fábio D. Sinobre</h1>
                <h2>Engenharia da Computação</h2>
            </div>

            <div id='btn_links' className='btn_main'>
                <div className='btn_span'><button className='btn' ><Link to='/'style={{color:'black',fontSize:'1.5rem'}}>Home</Link> </button></div>
                <div className='btn_span'><button className='btn' ><Link to='/fotos'style={{color:'black',fontSize:'1.5rem'}}>Fotos</Link> </button></div>
                <Btn_Course/>
                <div className='btn_span'><button className='btn' ><Link to='/projetos'style={{color:'black',fontSize:'1.5rem'}}>Projetos</Link> </button></div>
            </div>

            <div id='img_logo' className='imgLogo'>
                <img src={Logo} alt='Foto do fabio dentro de um espirro de tinta' />
            </div>
        </div>
    )
}

export default Header