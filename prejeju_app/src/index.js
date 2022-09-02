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
import DateSelect from "./reducers/dateSelect"
import CafePage from "./reducers/cafe"
import CarLodPage from "./reducers/carlod"
import AirPage from "./reducers/airplane"
import FoodPage from "./reducers/food"
import TourPage from "./reducers/tour"
import Result from "./pages/Result"

import { Provider } from 'react-redux'
import store from "./store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/type" element={<DateSelect />} />
        <Route path="/type/cafe" element={<CafePage />} />
        <Route path="/type/carlod" element={<CarLodPage />} />
        <Route path="/type/airplane" element={<AirPage />} />
        <Route path="/type/food" element={<FoodPage />} />
        <Route path="/type/tour" element={<TourPage />} />
        <Route path="/type/result" element={<TourPage />} />
      </Routes>
    </BrowserRouter >
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
