import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';


// pages
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route exact path='/' element={user ? <Dashboard /> : <Navigate to='/login' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate exact to='/' />} />
              <Route path='/signup' element={!user ? <Signup /> : <Navigate exact to='/' />} />
              <Route path='/create' element={<Create />} />
              <Route path='/project/:id' element={<Project />} />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
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