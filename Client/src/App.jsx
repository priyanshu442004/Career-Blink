import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Ats_Checker from './pages/Ats_Checker';
import FormattingTips from './pages/FormattingTips'
import AIMockInterview from './pages/AIMockInterview'
import InterviewPractice from './pages/InterviewPractice';
import InterviewTips from './pages/InterviewTips'
import DSA from './pages/DSA';
import Notes from './pages/Notes';
import EnglishCommunication from './pages/EnglishCommunication'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Rootlayout from './layout/Rootlayout';
import FileReader from './pages/FileReader';

const App = () => {

     const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<Rootlayout />}>
         <Route index element={<Home />} />
         <Route path='ATSChecker' element={<Ats_Checker />} />  
         <Route path='File' element={<FileReader />} />  
         <Route path='FormattingTips' element={<FormattingTips />} />  
         <Route path='AIMockInterview' element={<AIMockInterview />} />  
         <Route path='InterviewPractice' element={<InterviewPractice />} /> 
         <Route path='InterviewTips' element={<InterviewTips />} /> 
         <Route path='DSA' element={<DSA />} />
         <Route path='Notes' element={<Notes />} />
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