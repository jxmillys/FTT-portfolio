import LogoFtt from '../public/assets/logo-ftt.jpg';
import TopBar from '../components/TopBar';
import AlanTuring from '../public/assets/alan-turing.jpg';

export default function Home() {
    return (
        <div className="h-full w-full bg-white overflow-scroll overflow-x-hidden">
            <div className="pb-20">
                <TopBar />
            </div>
            <div className="w-full  p-10">
                <div className="flex justify-center">
                    <img src={LogoFtt} alt="" className="w-100 h-40" />
                </div>

                <div className="p-6 h-full">
                    <h1 className="flex font-bold text-balck text-sm justify-center items-center md:text-2xl md:mt-12 mb-4">
                        Conheça a FTT
                    </h1>

                    <div className="w-auto flex align-center flex-col">
                        <div className="w-auto flex align-center flex-row">
                            <div>
                            <p className="flex font-bold text-black text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-justify">
                                A Fábrica de Tecnologias Turing (FTT) é um
                                laboratório empresa, estruturado em três núcleos
                                (Fábrica de Software, Núcleo de Capacitação e
                                Núcleo de Pesquisa), e tem por objetivo formar
                                alunos com visão mercadológica. Aqui são
                                desenvolvidos projetos reais, a partir de
                                parcerias locais e internacionais, fazendo uso
                                de metodologias, padrões, técnicas e ferramentas
                                inovadoras requeridas pelo mercado de trabalho.
                                Assim, a FTT, contribui para a integralização do
                                perfil profissional do aluno e, atualmente, é
                                fonte de recrutamento de profissionais.
                            </p>
                            </div>
                            <div className="flex justify-center">
                            </div>
                        </div>

                        <p className="mt-5 flex font-bold text-black text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-justify">
                            Essa é uma estrutura madura, pois desde 2006, alunos
                            e professores dos cursos de computação exercitam as
                            práticas da Engenharia de Software na produção de
                            sistemas. Tanto os clientes como os projetos são
                            reais, o que permite a vivência profissional dos
                            envolvidos, aproximando as teorias e as práticas
                            pedagógicas das necessidades do mercado.
                        </p>
                        <p className="mt-5 flex font-bold text-black text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-justify">
                            Especificações: Software, Tecnologia, Engenharia de
                            Computação, Engenharia de Software, Fábrica de
                            Software, Educação, Curso Superior, Universidade,
                            Instituição de Ensino, Programação, Teste de
                            Software, Desenvolvimento de Sistemas, Sistemas,
                            Requisitos, Comunicação, UI/UX, Qualidade de
                            Software, Capacitação, Educação e Conhecimentos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
