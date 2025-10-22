//imports dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//imports componentes
import Header from './componentes/header'
import Inicio from './componentes/inicio'
//imports css
import './css/general.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inicio />
  </StrictMode>,
)
