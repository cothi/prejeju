import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DateSelect from "./pages/dateSelect"
import Cafe from "./pages/Cafe"
import CarLod from "./pages/CarLod"
import Airplane from "./pages/Airplane"
import Food from "./pages/Food"
import Tour from "./pages/Tour"
import Result from "./pages/Result"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/prejeju" element={<App />} />
      <Route path="/prejeju/type" element={<DateSelect />} />
      <Route path="/prejeju/type/cafe" element={<Cafe />} />
      <Route path="/prejeju/type/carlod" element={<CarLod />} />
      <Route path="/prejeju/type/airplane" element={<Airplane />} />
      <Route path="/prejeju/type/%EC%9A%B4%EC%9E%84%EB%A3%8C" element={<Airplane />} />
      <Route path="/prejeju/type/food" element={<Food />} />
      <Route path="/prejeju/type/tour" element={<Tour />} />
      <Route path="/prejeju/type/result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
