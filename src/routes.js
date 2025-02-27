import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';

export default function RoutesComponent() {
   return <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage/>} />
            <Route path='detail/:id' element={<Detail/>} />
        </Routes>
    </BrowserRouter>
}