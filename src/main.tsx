
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ShopContext } from './components/ShopContext.tsx'

createRoot(document.getElementById('root')!).render(
    <ShopContext.Provider>

            <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopContext.Provider>
    
    
)
