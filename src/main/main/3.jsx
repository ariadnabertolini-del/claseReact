import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';

import './css/general.css';

import HeaderNav from '../../componentes1/headernav';
import ContenidoDinamico from '../../componentes1/contenido-dinamico';
import snippets from '../../componentes1/snpper';

function ComponentePrincipal(){
    return(
        <h1>hola mundo</h1>
    )
}

const rutasObjetos = createBrowserRouter([
    {
        path: "/",
        Component: ComponentePrincipal
    },
    {
        path:"/contenido-dinamico",
        Component: ContenidoDinamico,
    },
     {
        path:"/snippets",
        Component: snippets,
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderNav />
        <RouterProvider router={rutasObjetos} />
    </StrictMode>
)