import '../styles/App.css';
import PageError from './PageError';
import TopTen from './TopTen'
import Title from './FilmsTitle'
import OriginalTitle from './FilmsOriginalTitle'
import Overview from './FilmsOverview'

import Home from './Home'
import React, {Fragment}from 'react'
import { BrowserRouter, Routes, Route, Redirect  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact /> 
          <Route path='/topten' element={<TopTen/>} exact /> 
          <Route path='/title' element={<Title/>} exact />
          <Route path='/originaltitle' element={<OriginalTitle/>} exact />
          <Route path='/overview' element={<Overview/>} exact /> 
          <Route element={<PageError/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
