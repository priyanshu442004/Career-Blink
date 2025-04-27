import React from 'react';
import formatting from '../../../assets/images/formatting.png';
import { useNavigate } from 'react-router-dom';
import Read_Resume from '../../../component/Read_Resume';

const FormattingTips = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/FormattingTips");
  };

  return (
    <div className="pb-20 overflow-x-hidden  bg-gradient-to-b from-blue-50 to-blue-100 pb-20">
      

      {/* Hero Section */}
      <div className="mt-32 ml-4">
        <h2 className="text-3xl text-center md:text-left md:text-6xl">
          
          <span className="text-gray-500 font-extrabold">
          Career-Blink: Fix Resume Errors,
          </span>
          <br />
          Boost Your ATS Score!
        </h2>
        <div className=' flex flex-row justify-between'>
          
        <p className="mt-[20px] text-muted-foreground text-lg ">
        Make your resume ATS-friendly with Career-Blink’s Resume Optimizer! <br /> Get instant error detection, expert tips, and personalized suggestions to improve your ATS score. <br /> Fix formatting issues, optimize keywords, and ensure your resume ranks higher in applicant tracking systems. <br /> Maximize your chances of landing interviews by crafting a resume that stands out to both ATS and recruiters. <br /> 
<br />
    <span className='text-3xl font-semibold text-black-600'>

        Optimize. Impress. Get Hired!
    </span>
        <br />
        <button
        onClick={() => handleNavigate()}
        className='border hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-lg mt-8'>
          Get AI tips for your resume
        </button>
        <button
        onClick={() => navigate('/ATSChecker')}
        className='bg-blue-500 hover:bg-blue-700 border border-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-8 ml-4'>
          Check ATS score
        </button>
        </p>
        
        </div>
      </div>

      <hr
  class="mt-12 mb-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:via-neutral-600" />

      <div className='flex justify-center w-full'>
        <img src={formatting} alt="" className='w-[95%] rounded-lg h-[500px]'/>
      </div>

      <div class="pb-6 px-16 mt-12 flex items-center text-lg text-gray-800 before:flex-1 before:border-t before:border-gray-500 before:me-6 after:flex-1 after:border-t after:border-gray-500 after:ms-6 dark: dark:before:border-neutral-600 dark:after:border-neutral-600">Upload resume here</div>
      
  
        {/* {Resume component} */}
        <Read_Resume show="dontShow"/>

        <div className='w-screen flex items-center justify-center mt-[7%]'>
            <button onClick={()=>{
                window.location.href = "mailto:priyanshusharma442004@gmail.com";
            }} className='bg-[#186cec] md:w-[12vw] p-2 rounded-[10px] border border-black text-white'>
                Need Help?  
            </button>
        </div>
      
      </div>
  )
}

export default FormattingTips;