import {Provider} from 'react-redux';
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import './index.css'
import App from './App.jsx'
import store from './store/store';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store = {store}>
   <App />
   <Toaster />
   </Provider>
  </BrowserRouter>
   
);
