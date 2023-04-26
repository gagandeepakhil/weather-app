import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Main from "./main";


ReactDom.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    </>
    ,document.getElementById('root'));
