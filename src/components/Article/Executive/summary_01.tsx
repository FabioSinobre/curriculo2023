import { Link } from "react-router-dom"

function Summary01(){
    
    return(
        <>
        <div className="summary">
                <h2>Sumário Executivo</h2>
                <ul>
                    <li>2022 – TCC concluído e aprovado em dezembro pela banca examinadora, o estudo busca analisar os processos de segurança nas transações financeiras assim como formas para mitigar vulnerabilidades nos processos internos. O estudo se pautou nas seguintes formas de pagamento QR-Code, Pix e Bitcoin, análise das dez principais ameaça classificadas pelo portal OWASP e uma análise dos processos de invasão hacker. </li>
                    <li>2022 – Conclui o oitavo e último projetos integrador, os projetos integrados da UNIVESP tem o objetivo de desenvolvemos competências analíticas, críticas, criar e desenvolver projetos reais, compreender as necessidades do cliente. É esperado que no desenvolvimento dos projetos seja aplicado metodologias ágeis, boas práticas de programação entre outros temas estudados, sempre visando entregar valores aos clientes. </li>
                    <li>2022 – Desenvolvimento de um sistema de fechadura eletromagnética, acionada através de um App via bluetooth em parceria com a RogerTelecom, desenvolvido para smartphone o dispositivo encontra se em fase de teste. O dispositivo permite múltiplas conexões podendo ser acionado por uma rede privada interna ou externa. </li>
                    <li>2021 – Projeto autoral, desenvolvimento de um robô seguidor de linha, controlado através de uma interface web, protótipo para o Museu da Computação do ICMC – USP, na primeira fase desenvolvemos e integramos os sistemas elétrico, eletrônico, mecânico e lógico desenvolvida em linguagem C.  </li>
                </ul>
                <div className="link_read"><Link to='/sumariolongo'>Leia mais...</Link></div>
            </div>
        </>
    )
}

export default Summary01