import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, Home, NotFoundPage, ProjectsPage, Resume } from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<ProjectsPage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  </BrowserRouter>
);
