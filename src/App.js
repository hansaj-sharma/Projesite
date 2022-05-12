import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/create' element={<Create />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App

/*
pages

dashboard 
login
signup
create
project 

*/