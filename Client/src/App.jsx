import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
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
import Ats_Checker from './pages/ATS_Checker';
import ATS_calc from './pages/ATS_calc';
import ATS_Score from './pages/ATS_Score';
import Formatting_Calc from './pages/Formatting_Calc';
import Formatting_Result from './pages/Formatting_Result';

const App = () => {

     const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path='/' element={<Rootlayout />}>
         <Route index element={<Home />} />
         <Route path='ATSChecker' element={<Ats_Checker />} />  
         <Route path='Formatting' element={<Formatting_Calc />} />  
         <Route path='Formatting-Resume' element={<Formatting_Result />} />  
         <Route path='ATS-Score' element={<ATS_Score />} />  
         <Route path='Calculating-score' element={<ATS_calc />} />  
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