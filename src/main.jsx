import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Props from './componentes2/props';

import './css/general.css';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Props />
    </StrictMode>
)