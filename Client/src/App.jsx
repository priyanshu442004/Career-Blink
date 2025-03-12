import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import MockInterview from './pages/MockInterview';
import PrepMaterial from './pages/PrepMaterial';
import EnglishCommunication from './pages/EnglishCommunication'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Rootlayout from './layout/Rootlayout';
import Ats_Checker from './pages/Ats_Checker';

const App = () => {

     const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<Rootlayout />}>
         <Route index element={<Home />} />
         <Route path='ATSChecker' element={<Ats_Checker />} />  
         <Route path='MockInterview' element={<MockInterview />} /> 
         <Route path='PrepMaterial' element={<PrepMaterial />} />
         <Route path='EnglishCommunication' element={<EnglishCommunication />} />   
         <Route path='Login' element={<Login />} />   
         <Route path='Signup' element={<Signup />} />   
         </Route>

      )
     )
     return (
      <RouterProvider router={router}/>
     )
}

export default App;