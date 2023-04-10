import LogoFtt from '../public/assets/logo-ftt.jpg';
import TopBar from './TopBar';

export default function DetailComponent() {
    return (
        <div className="h-full w-full bg-dark-0d overflow-scroll overflow-x-hidden">
            <div className="pb-20">
                <TopBar />
            </div>
            <div className="w-full  p-10">
                <div className="flex justify-center">
                    <img src={LogoFtt} alt="" className="w-100 h-40" />
                </div>
                <div className="w-auto flex align-center">
                    <p className="flex font-bold text-white text-sm justify-center items-center md:text-2xl md:mt-12 mb-4 text-justify">
                        DAasklajsdimrshzqikmaklsA criação de projetos é uma
                        parte fundamental do processo de aprendizado em uma
                        faculdade. Esses projetos são geralmente uma maneira de
                        os estudantes aplicarem o conhecimento teórico adquirido
                        em sala de aula em situações práticas. Além disso, eles
                        ajudam os estudantes a desenvolver habilidades como
                        trabalho em equipe, comunicação, liderança e resolução
                        de problemas. Os projetos podem ser criados em diversas
                        áreas do conhecimento, desde projetos de engenharia,
                        arquitetura, tecnologia da informação, saúde,
                        administração, entre outros. Eles podem variar de acordo
                        com o tamanho, tempo de duração e objetivos específicos.
                        Ao criar um projeto, os estudantes geralmente trabalham
                        em grupos e seguem um processo definido, que pode
                        incluir a definição de um problema, pesquisa de
                        informações relevantes, análise de dados, identificação
                        de soluções, desenvolvimento de protótipos, testes,
                        implementação e avaliação. É importante que os
                        estudantes sejam orientados por professores ou tutores
                        para garantir que o processo de criação do projeto seja
                        bem estruturado e eficiente. A criação de projetos em
                        uma faculdade pode ser uma oportunidade para os
                        estudantes se envolverem em atividades extracurriculares
                        e se destacarem em suas carreiras futuras. Muitos
                        projetos criados em faculdades têm sido a base para a
                        criação de startups e empresas de sucesso. Além disso,
                        os projetos podem ser uma oportunidade para os
                        estudantes se conectarem com empresas e organizações,
                        ganhando experiência profissional e até mesmo
                        oportunidades de emprego. Em resumo, a criação de
                        projetos é uma parte importante do processo de
                        aprendizado em uma faculdade. Eles ajudam os estudantes
                        a aplicar o conhecimento teórico em situações práticas,
                        desenvolver habilidades e prepará-los para suas
                        carreiras futuras. É importante que os projetos sejam
                        bem estruturados e orientados por professores ou tutores
                        para garantir que os estudantes atinjam seus objetivos e
                        obtenham os melhores resultados
                        possíveis.NSOIDNAOSIDNALSDKNALKSDJALKSDJAKLSDJ
                    </p>
                </div>
            </div>
        </div>
    );
}