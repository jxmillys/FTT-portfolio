import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import FaleConosco from '../pages/FaleConosco';
import DetailComponent from '../components/DetailComponent';
function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/faleconosco" element={<FaleConosco />} />
                <Route path="/detalhesProjetos" element={<DetailComponent />} />
            </Routes>
        </BrowserRouter>
    );
}


export default Router;
