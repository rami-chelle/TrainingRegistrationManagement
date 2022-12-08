import React from 'react';

import { Routes, Route } from 'react-router-dom';

//Import pages
import Homepage from './pages/HomePage';
import Trainingpage from './pages/Trainingpage';
import AdminHomePage from './pages/AdminHomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminRegistrationPage from './pages/AdminRegisterForm';
import AddTrainingPage from './pages/AddTrainingPage';
import Trainee from './pages/Trainee';

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path = '/' element = {<Homepage/>}></Route>
          <Route path = '/trainingpage' element = {<Trainingpage/>}></Route>
          <Route path = '/admin-home-page' element = {<AdminHomePage/>} />
          <Route path = '/admin-login-page' element = {<AdminLoginPage/>} />
          <Route path = '/admin-registration-page' element = {<AdminRegistrationPage/>} />
          <Route path = '/add-training-page' element = {<AddTrainingPage/>}></Route>
          <Route path = '/trainee' element = {<Trainee/>}></Route>
        </Routes> 
      </main>
    </>
  )
}

export default App;