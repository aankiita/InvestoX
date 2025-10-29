import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Home  from './components/Home';
import Dashboard from "./components/DashBoard";
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <Routes>
          <Route path="/*" element={<Home/>}/>
      </Routes>
    </CookiesProvider>
  </BrowserRouter>
);
