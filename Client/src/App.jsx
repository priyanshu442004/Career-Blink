import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import FormattingTips from './pages/Scan Resume/Formatting tips/FormattingTips'
import AIMockInterview from './pages/Mock Interview/AI mock Interview/AIMockInterview'
import InterviewPractice from './pages/Mock Interview/Interview Practice/InterviewPractice';
import InterviewTips from './pages/Mock Interview/Interview Tips/InterviewTips'
import DSA from './pages/Prep Material/DSA/DSA';
import Notes from './pages/Prep Material/Notes/Notes';
import EnglishCommunication from './pages/English communication/EnglishCommunication'
import Login from './pages/Login-Signup/Login'
import Signup from './pages/Login-Signup/Signup'
import Rootlayout from './layout/Rootlayout';
import Ats_Checker from './pages/Scan Resume/ATS Checker/ATS_Checker';
import ATS_calc from './pages/Scan Resume/ATS Checker/ATS_calc';
import ATS_Score from './pages/Scan Resume/ATS Checker/ATS_Score';
import Formatting_Calc from './pages/Scan Resume/Formatting tips/Formatting_Calc';
import Formatting_Result from './pages/Scan Resume/Formatting tips/Formatting_Result';

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