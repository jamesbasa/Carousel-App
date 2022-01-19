import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import CarouselPage from './Carousel/CarouselPage';
import About from './About/About';
import reportWebVitals from './reportWebVitals';
import { paths } from './constants'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar />
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<CarouselPage />} />
        <Route path={paths.about} element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
