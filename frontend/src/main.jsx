import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AuthContext from "./Admin-panel/context/AuthContext.jsx"
import { BrowserRouter } from 'react-router-dom'
// import UserContext from './Admin-panel/context/AdminContext.jsx'
import { Provider } from "react-redux";
import store from './store/store.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    <ToastContainer/>
    </Provider>
    </BrowserRouter>

)
