import { Link } from "react-router-dom"
import '../cards.css'

function Tcc(){
    return(
        <>
        <div className="card_work">
            <div className="card_long">
            <div className='title_card'><h3>TCC -  Tese de Conclusão de Curso</h3></div>
            <p className='card_date'>Guarulhos, 11 de dezembro de 2022</p>
            <br />
            <p>O objetivo desta tese de conclusão de curso, foi pautado no estudar é levantar as principais vulnerabilidades das transações 
                financeiras com foco nas novas formas de pagamentos, tais como, Bitcoin, Pix e QR-Code.</p>

            <p>Verificar a relação entre segurança da informação e o processo de invasão na proteção de transações financeiras nos comércios 
                online.</p>  

            <p>Compreender o mecanismo de segurança nessas formas de recebimento.  Utilizamos os métodos de análise bibliográfica de livros 
                pertinentes a área, sites como google acadêmico na pesquisa de artigos científicos, revistas e site especializado em 
                segurança digital.</p>

            <p>Seleção de dados e montagem da matriz SWOT (Strengths Weaknesse Opportunities Threats) (forças, fraquezas, oportunidades 
                e ameaças) e diagnóstico da mesma. </p>

            <p>Através da Matriz SWOT conseguiu observar o comportamento com os diversos tipos de pagamentos, que é uma das preocupações 
                diárias observamos que as corporações bancárias possuem mecanismos de segurança que no geral é bem eficiente.</p>

            <p>Entretanto o hacker busco o ponto mais vulnerável do sistema que pode ser nossa aplicação, nas nossas aplicações, entretanto,
                 as aberturas nas falhas cibernéticas são geralmente humanas. </p>

            <p>Nossos resultados indicam pontos fracos e fortes e demonstram que as equipes têm que estar atualizadas e preparadas para novos 
                ataques, e que são constantes no dia a dia.  </p>

            <p>E essas análises foram feitas por duas perspectivas: uma pelo desenvolvedor e outra pela visão do atacante. O estudo indica que 
                as empresas têm que ter programas de conscientização para todos os membros da equipe.</p>

            <p>O ataque hacker pode começar por qualquer funcionário independente do seu cargo ou função, geralmente o ataque começa pela engenharia 
                social, o hacker inicia uma investigação que pode iniciar por qualquer funcionário. </p>

            <p>É um erro comum achar que a responsabilidade da segurança é apenas responsabilidade dos profissionais do TI, temos que ter em mente 
                que vários funcionários possuem acesso privilegiados, seja para realizar manutenção em uma porta ou parede ou até mesmo para recolher
                 o lixo. </p>

            <p>Uma simples selfie ou foto do grupo do escritório pode conter informações privilegiadas expondo dados sensíveis da empresa.</p>    

            <p>Os perfis dos ataques devem ser bem conhecidos e as ameaças recentes devem ser combatidas para não permitir brechas que 
                ameaçam a segurança.  </p>

            <p>Não existem fórmulas mágicas para evitar ataques, é necessária uma mudança de consciência, uma criação de um estilo de 
                vida corporativa onde todos são importantes e por tanto todos devem participar. Ai sim junto com a mudança de consciência
                 uma boa prática de programação seguindo normais e princípios bem definidos. </p>
            <div className='link_work'><Link to='/'>Voltar para home...</Link></div>
            </div>
            
        </div>
        </>
    )
}

export default Tcc