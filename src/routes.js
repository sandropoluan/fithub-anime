import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';

export default function RoutesComponent() {
    return <HashRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
    </HashRouter>
}