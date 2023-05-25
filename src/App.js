import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CarPage from './components/carPage/CarPage';
import css from './App.css';

export default function App() {
  return (
    <BrowserRouter basename="/Maximum_showcase" className={css.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/CarPage/:carId" element={<CarPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}