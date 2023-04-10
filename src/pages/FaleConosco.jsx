import React from 'react';
import TopBar from '../components/TopBar';
import LogoFtt from '../public/assets/ftt-sem-fundo.png';
export default function FaleConosco() {
    return (
        <div className="h-full w-full bg-white">
            <div className="pb-20">
                <TopBar />
            </div>

            <div className="p-6 flex justify-center flex-col">
                <div className="flex justify-center">
                    <img src={LogoFtt} alt="" className="w-100 h-40" />
                </div>
                <div className="flex flex-col space-y-4 items-center">
                    <div class="flex flex-col">
                        <label
                            for="first_name"
                            className="text-sm font-medium text-white"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[650px] shadow-sm sm:text-sm border-gray-300 rounded-md pl-2 h-10 border"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            for="last_name"
                            className="text-sm font-medium text-white"
                        >
                            Sobrenome
                        </label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[650px] shadow-sm sm:text-sm border-gray-300 rounded-md pl-2 h-10 border"
                            placeholder="Digite seu sobrenome"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            for="email"
                            className="text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[650px] shadow-sm sm:text-sm border-gray-300 rounded-md pl-2 h-10 border"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            for="project_description"
                            className="text-sm font-medium text-white"
                        >
                            Descrição do projeto
                        </label>
                        <textarea
                            name="project_description"
                            id="project_description"
                            rows="4"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[650px] shadow-sm sm:text-sm border-gray-300 rounded-md pl-2 border"
                            placeholder="Digite uma breve descrição do seu projeto"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="text-white rounded-full bg-dark-red max-w-sm p-2 hover:bg-white-button text-black-bg focus:ring-1 focus:outline-none focus:ring-blue-100 hover:bg-black hover:text-white items-center w-40"
                        onClick={() => alert('serviço indisponível')}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}
