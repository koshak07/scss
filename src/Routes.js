import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfoPage from './pages/InfoPage';
import MainPage from './pages/MainPage';

const MyRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/" element={<InfoPage/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;