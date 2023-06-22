import { Link } from "react-router-dom"

function Summary02(){
    return(
        <>
        <div className="main_article">
            <div className="summary">
                    <h2>Sumário Executivo</h2>
                    <ul>
                        <li>2022 – TCC concluído e aprovado em dezembro pela banca examinadora, o estudo busca analisar os processos de segurança nas transações financeiras assim como formas para mitigar vulnerabilidades nos processos internos. O estudo se pautou nas seguintes formas de pagamento QR-Code, Pix e Bitcoin, análise das dez principais ameaça classificadas pelo portal OWASP e uma análise dos processos de invasão hacker. </li>
                        <li>2022 – Conclui o oitavo e último projetos integrador, os projetos integrados da UNIVESP tem o objetivo de desenvolvemos competências analíticas, críticas, criar e desenvolver projetos reais, compreender as necessidades do cliente. É esperado que no desenvolvimento dos projetos seja aplicado metodologias ágeis, boas práticas de programação entre outros temas estudados, sempre visando entregar valores aos clientes. </li>
                        <li>2022 – Desenvolvimento de um sistema de fechadura eletromagnética, acionada através de um App via bluetooth em parceria com a RogerTelecom, desenvolvido para smartphone o dispositivo encontra se em fase de teste. O dispositivo permite múltiplas conexões podendo ser acionado por uma rede privada interna ou externa. </li>
                        <li>2021 – Projeto autoral, desenvolvimento de um robô seguidor de linha, controlado através de uma interface web, protótipo para o Museu da Computação do ICMC – USP, na primeira fase desenvolvemos e integramos os sistemas elétrico, eletrônico, mecânico e lógico desenvolvida em linguagem C.  </li>
                        <li>2021 – Na segunda fase do desenvolvimento do robô foi desenvolvido o front-end em REACT.js e sua integração com o Banco de Dados NoSQL Firebase Realtime Database. Nesta fase, foi realizado a conexão remota utilizando a pilha de protocolo TCP/IP e os primeiros testes de conexão e controle.</li>
                        <li>2020 – Integração de um sistema analógico e digital de comunicação para CPTM, o projeto visava integrar o sistema de mensagem mp3 digital a o sistema de comunicação analógico já existente nas estações aproveitando toda infraestrutura existente cabeamento, alto falante, caixas de som entre outras estruturas.</li>
                        <li>2020 – Desenvolvimento de um App para o compartilhamento de serviços, levantamento de requisitos, caso de uso, história de usuário e desenvolvimento do UX / UI.</li>
                        <li>2020 – Telhado verde, composto por sete camadas (proteção mecânica, manta asfáltica aluminizada, barreira contra raízes, sistema de drenagem, tecido permeável, terra adubada e vegetação) o projeto foi executado apenas a parte de impermeabilização com manta asfáltica, teste de estanquidade aprovado, a segunda fase foi suspensa devido a pandemia do covid-19.</li>
                        <li>2019 – Projeto destinado a tratamento de resíduos, descarte e reciclagem, parceria com a empresa Recicla Mais Guarulhos.</li>
                        <li>2019 – Projeto fotovoltaico conectado à rede, objetivo aproveitar as coberturas de prédios públicos do estado de São Paulo transformando em micros usinas fotovoltaicas ampliando a oferta energética na grande São Paulo. </li>
                        <li>2010 – Participei do programa de iniciação à docência com o tema “Ensino de Física Moderna no Ensino Média” pelo Instituto Federal (IF-SP), utilizando simuladores desenvolvidos em Java por PhET – Colorado US, projetos iniciação à docência financiado pela CAPES / PIBID.</li>
                        
                    </ul>
                    <div className="link_read"><Link to='/'>Voltar para home...</Link></div>
                </div>
            </div>
        </>
    )
}

export default Summary02