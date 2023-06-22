import { Link } from 'react-router-dom'

import './section.css'

function Section(){
    return(
        <>
            <div id='conteiners'>
                <div><h3 id='experience'>Experiências Profissionais</h3></div>
                <div id='cards'>
                    <div id='card_01' className='card'>
                        <div className='title_card'><h3>Porteiro - Atento Brasil</h3></div>
                        <br />
                        <p className='card_date'>Guarulhos - SP nov. 2022 - atual</p>
                        <br />
                        <p>Cadastro e controle de veículos e visitantes, controle e cadastro de entrada de equipamentos pessoais como notebook.</p>
                        <p>Orientação quanto as regras internas de uso. </p>
                        <p>Impressão e limpeza de cartão magnético de controle de acesso.</p>
                        <p>Rondas periódicas nas dependências, com relatório de anormalidades.</p>
                    </div>
                    <div id='card_02' className='card'>
                        <div className='title_card'><h3>TCC -  Tese de Conclusão de Curso</h3></div>
                        <br />                        
                        <p className='card_date'>Guarulhos, 11 de dezembro de 2022</p>
                        <br />
                        <div>
                        <p>O objetivo desta tese de conclusão de curso, foi pautado no estudar é levantar as principais vulnerabilidades das transações 
                financeiras com foco nas novas formas de pagamentos, tais como, Bitcoin, Pix e QR-Code.</p>

                         <p>Verificar a relação entre segurança da informação e o processo de invasão na proteção de transações financeiras nos comércios 
                online.</p>  

                        <p>Compreender o mecanismo de segurança nessas formas de recebimento.  Utilizamos os métodos de análise bibliográfica de livros 
                pertinentes a área, sites como google acadêmico na pesquisa de artigos científicos, revistas e site especializado em 
                segurança digital.</p>
                        <p>Seleção de dados e montagem da matriz SWOT (Strengths Weaknesse Opportunities Threats) (forças, fraquezas, oportunidades 
                e ameaças) e diagnóstico da mesma. </p>
                        <div className='link_work'><Link to='/tcc'>Leia mais...</Link></div>
                        </div>
                    </div>

                    <div id='card_03' className='card'>
                        <div className='title_card'><h3>Zelador - Cond. Parque Brasil</h3></div>
                        <br />                        
                        <p className='card_date'>Guarulhos, SP 2018 - 2022</p>
                        <br />
                        <p>Liderava uma equipe multidisciplinar de 12 colaboradores orgânicos, onde introduzi conceitos de metodologias ágeis, como Scrum, kanban e principalmente Lean Six Sigma.</p> 
                        <p>Organizei o processo de manutenção com o framework de planejamento e controle de manutenção PCM os processos de melhorias seguiram com base no roteiro DMAIC.</p> 
                        <p>Introduzi o uso consciente e a racionalização dos recursos, assim como o uso correto de EPIs de acordo com a NR6 e a verificação do certificado de aprovação do produto CA.</p>
                        <p>Coordenei a criação de uma rede LAN integrado a portaria, administração, controle de acesso, servidor interno e área de acesso a wi-fi. Topologia mista em árvores.</p>
                        <div className='link_work'><Link to='/zelador'>Leia mais...</Link></div>
                    </div>

                    <div id='card_04' className='card'>
                       <div className='title_card'><h3>Manutenção Predial - cond. Parque Brasil</h3></div>
                        <br />                        
                        <p className='card_date'>Guarulhos - SP 2017 - 2018</p>
                        <br />
                        <p>Desenvolvi um plano de trabalho utilizando o quadro Kanban para gerenciar o fluxo de trabalho e equilibrar os processos de manutenção.</p> 
                        <p>Criação de planilha para controle de estoque, fluxo de entrada e saída. </p>
                        <p>Classificação das prioridades da manutenção de acordo com a NR4. </p>
                        <p>Criei um cronograma de manutenção preventiva com base no PCM. </p>
                        <p>Com base nas técnicas de cabeamento estruturado realizei a substituição de toda a rede elétrica da área comum, substituição do cabeamento das antenas coletivas vertical e horizontal.</p> 
                    </div>
                    <div id='card_05' className='card'>
                        <div className='title_card'><h3>Refornas e manutenção</h3></div>
                        <br />                        
                        <p className='card_date'>Guarulhos - SP nov. 2022 - atual</p>
                        <br />
                        <p>Por vários períodos da minha jornada trabalhei como autônomo, Com pequenas 
                            reformas pintura, hidráulica, colocação de piso, instalação de janelas e portas entre outras atividades. </p>
                        <p>Na área de reforma e manutenção destaco como principal área de atuação instalações elétricas 
                            residenciais, tanto reparo quanto instalações novas seguindo as recomendações técnicas da NR-10 e a NBR-5410 instalações elétricas 
                            de baixa tensão.</p>
                        <p>Instalações de sistema de câmeras de segurança com monitoramento web, instalação e configuração de DVR e câmeras, instalação e 
                            configuração de servidor local. </p>
                    </div>
                    <div id='card_06' className='card'>
                        <div className='title_card'><h3>Controlador de acesso</h3></div>
                        <br />
                        <p className='card_date'>Guarulhos - SP  1999 - 2015</p>
                        <br />
                        <p>Atuei na organização e segurança de eventos da prefeitura municipal de Guarulhos, assim como em próprios públicos. </p>
                        <p>Orientação quanto as regras de uso dos aparelhos públicos. </p>
                        <p>Vistoria nas dependências, relatório sobre extintores e mangueiras de incêndio e outas vistorias relativo à segurança. </p>
                        <p>Na minha jornada na prefeitura trabalhei nos mais variados postos, teatro municipal Padre Bento, Secretária da saúde, 
                            secretária de esporte, escola municipal e hospital HMU.</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Section