import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Ftt from '../public/assets/logo-ftt.jpg';

import projetos from '../Mock/projetos.json';
import { Link, Route, Routes } from 'react-router-dom';
import DetailComponent from '../components/DetailComponent';

export default function Projetos() {
    return (
        <div className="flex flex-wrap w-full h-full w-full bg-white overflow-scroll overflow-x-hidden">
            <div className="pb-36">
                <TopBar />
            </div>

            {projetos.map((item) => (
                <div className="mt-40 flex flex-col">
                    <div className="ml-10 w-80 h-full bg-white rounded-lg drop-shadow-[0_5px_3px_rgba(0,0,0,0.30)]">
                        <a href="/">
                            <img
                                className="rounded-t-lg h-44 w-full"
                                src={Ftt}
                                alt="LogoFtt"
                            />
                        </a>
                        <div className="p-5">
                            <a href="/">
                                <h5 className="text-2xl font-bold tracking-tight text-black font-header">
                                    {item.name_projetos}
                                </h5>
                            </a>

                            <div className="h-[2px] w-60 bg-slate-300 rounded-lg justify-center items-center"></div>
                            <p className="pt-2 mb-3 text-balck">
                                {item.descricao}
                            </p>

                            <p className="pt-2 mb-3 text-black">
                                {item.cliente}
                            </p>

                            <Link
                                to="../detalhesProjetos"
                                className="inline-flex items-center py-2 px-3 text-sm
                            font-medium text-center text-black border-2
                            border-red-bg rounded-lg hover:bg-dark-red
                            text-dark-red-bg focus:ring-4 focus:outline-none
                            focus:ring-blue-300 hover:bg-dark-red-bg"
                            >
                                <span className="text-black"> Ler Mais</span>
                                <svg
                                    className="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}