import LogoFtt from '../public/assets/logo-ftt.jpg';
import TopBar from './TopBar';

export default function DetailComponent() {
    return (
        <div className="h-full w-full bg-white overflow-scroll overflow-x-hidden">
            <div className="pb-20">
                <TopBar />
            </div>
            <div className="w-full  p-10">
                <div className="flex justify-center">
                    <img src={LogoFtt} alt="" className="w-100 h-40" />
                </div>
                <div className="w-auto flex align-center">
                    <p className="flex font-bold text-black text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-justify">
                    A criação de uma fábrica de tecnologia em uma faculdade é uma iniciativa extremamente importante para o desenvolvimento de novas 
                    tecnologias e para a formação de profissionais altamente capacitados nessa área. A participação dos alunos nesse processo de 
                    desenvolvimento é fundamental, pois permite que eles aprendam de forma prática e estejam em contato direto com as mais recentes 
                    tecnologias e metodologias.

                    Uma fábrica de tecnologia em uma faculdade pode ser vista como uma incubadora de ideias, onde alunos e professores trabalham juntos 
                    para desenvolver novos projetos e soluções para problemas reais. Esses projetos podem variar desde a criação de novos aplicativos e 
                    softwares até o desenvolvimento de equipamentos e dispositivos inovadores.
                    Além de permitir que os alunos apliquem os conhecimentos adquiridos em sala de aula de forma prática, a fábrica de tecnologia também 
                    incentiva a inovação e o empreendedorismo. Os alunos têm a oportunidade de trabalhar em projetos próprios e criar suas próprias empresas, 
                    o que pode ser muito valioso para sua carreira futura.
                    Outro benefício da criação de uma fábrica de tecnologia em uma faculdade é a possibilidade de parcerias com empresas e instituições de pesquisa. 
                    Essas parcerias podem trazer recursos financeiros, equipamentos e expertise, além de possibilitar que os projetos desenvolvidos na faculdade sejam 
                    aplicados na indústria e na sociedade em geral.
                    Por fim, a criação de uma fábrica de tecnologia em uma faculdade também é importante para a própria instituição de ensino, que pode se tornar 
                    referência na formação de profissionais altamente qualificados em tecnologia. Isso pode atrair mais alunos e professores, fortalecer a reputação 
                    da faculdade e contribuir para o desenvolvimento econômico e social da região onde ela está localizada.
                    Em resumo, a criação de uma fábrica de tecnologia em uma faculdade é extremamente importante para o desenvolvimento de novas tecnologias, a formação 
                    de profissionais altamente capacitados e o incentivo ao empreendedorismo e à inovação. A participação dos alunos nesse processo é fundamental e traz 
                    benefícios tanto para eles quanto para a instituição de ensino e a sociedade em geral.
                    </p>
                </div>
            </div>
        </div>
    );
}