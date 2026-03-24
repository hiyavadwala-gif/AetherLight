import { createRoot } from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Main_Rotuer from './Router/Main_Rotuer.jsx';


createRoot(document.getElementById('root')).render(


<BrowserRouter>
  <Main_Rotuer />
</BrowserRouter>,


  // <StrictMode>
  //   <App/>
  // </StrictMode>,
)
