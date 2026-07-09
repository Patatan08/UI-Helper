import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Index from 'views/index/Index';
import Info from 'views/info/Info';
import View1 from 'views/view1/View1';
import View2 from 'views/view2/View2';
import Translator from 'views/Translator/Translator'
import DefaultPage from 'views/defaultPage/DefaultPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Scieżki z autoryzacją */}
            <Route path="/" element={<AppLayout />}>
                <Route index path="index" element={<Index />} />
                <Route path="info" element={<Info />} />
                <Route path="view1" element={<View1 />} />
                <Route path="view2" element={<View2 />} />
                <Route path="*" element={<DefaultPage />} />
                <Route path="Translator" element={<Translator />} />
            </Route>
        </>
    ),
    { basename: window.config.BASE_HOMEPAGE }
);

export default router;