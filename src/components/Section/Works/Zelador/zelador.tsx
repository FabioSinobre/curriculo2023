import { Link } from "react-router-dom"

import '../cards.css'

function Zelador(){
    return(
        <>
        <div className="card_work">
        <div className='card_long'>
        <div className='title_card'><h3>Zelador - Cond. Parque Brasil</h3></div>
            <p className='card_date'>Guarulhos, SP 2018 - 2022</p>
            <br />
            <p>Liderava uma equipe multidisciplinar de 12 colaboradores orgânicos, onde introduzi conceitos de metodologias ágeis, como Scrum, kanban e principalmente Lean Six Sigma.</p> 
            <p>Organizei o processo de manutenção com o framework de planejamento e controle de manutenção PCM os processos de melhorias seguiram com base no roteiro DMAIC.</p> 
            <p>Introduzi o uso consciente e a racionalização dos recursos, assim como o uso correto de EPIs de acordo com a NR6 e a verificação do certificado de aprovação do produto CA.</p>
            <p>Coordenei a criação de uma rede LAN integrado a portaria, administração, controle de acesso, servidor interno e área de acesso a wi-fi. Topologia mista em árvores.</p>
            <p>Coordenei a modernização do controle de acesso de pedestre através de biométrico e veicular com laço indutivo e TAG de acionamento integrado a um servidor dedicado.</p>
            <p>Coordenei a substituição e modernização do sistema de CFTV, instalação de rack de parede, 4 DVR, substituição de 45 câmeras, instalação de 6 câmeras IP e substituição de cabeamento utilizando as técnicas de cabeamento estruturado, instalação de banco de bateria e dispositivos de proteção.</p>
            <p>Responsável pela seleção para contratação e treinamento dos funcionários orgânicos.</p> 
            <p>Vistoriar de obras terceirizadas, obras particulares nas unidades verificação de documentação como responsabilidade técnica (RT).</p>
            <p>Implantei um sistema de gestão de compra just in time para compra de materiais de limpeza, manutenção, reforma em geral e EPI.</p>
            <p>Responsável em manter os laudos atualizados (AVCB, PPRA, Laudo de para raio, brigada de incêndio, representante CIPA NR6, laudo de limpeza e qualidade da água e laudo de controle de pragas).</p> 
            <div className='link_work'><Link to='/'>Voltar para home...</Link></div>
        </div>
        </div>
        </>
    )
}

export default Zelador