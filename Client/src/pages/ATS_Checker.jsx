import React from 'react';
import resume from '../assets/resume.jpg';
import { useNavigate } from 'react-router-dom';
import Read_Resume from '../component/Read_Resume';

const Ats_Checker = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/FormattingTips");
  };

  return (
    <div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen">
      

      {/* Hero Section */}
      <div className="mt-32 ml-4">
        <h2 className="text-3xl text-center md:text-left md:text-6xl">
          
          <span className="text-gray-500 font-extrabold">
          Career-Blink: Beat the ATS bots,
          </span>
          <br />
          land your dream job!
        </h2>
        <div className=' flex flex-row justify-between'>
          
        <p className="mt-[20px] text-muted-foreground text-lg">
        Career-Blink’s ATS Checker helps you create a resume that passes applicant tracking systems with ease. <br /> Get personalized feedback, fix formatting issues, and boost your chances of landing interviews. <br /> Stand out to recruiters by making sure your resume is optimized for the job you want. <br /> Beat the bots and get hired!
        <br />
        <br />
    <span className='text-3xl font-semibold text-black-600'>
    Scan. Fix. Get Noticed!


    </span>
        <br />
        <button
        onClick={() => handleNavigate()}
        className='border hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg mt-8'>
          Get AI tips for your resume
        </button>
        <button
        
        className='bg-blue-500 hover:bg-blue-700 border border-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-8 ml-4'>
          Check ATS score
        </button>
        </p>
        <img src={resume} alt="" className='w-80 mr-12 block -mt-8 rounded-lg'/>
        </div>
      </div>

      <div class="pb-6 px-16 mt-6 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">Upload resume here</div>


      {/* {Resume component} */}
      <Read_Resume show="show"/>
      </div>
  )
}

export default Ats_Checker