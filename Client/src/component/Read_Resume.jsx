import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { CiLocationArrow1 } from "react-icons/ci";


pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const Read_Resume = () => {
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [jobDesc, setJob] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedFormats = ['application/pdf', 
                              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      
      if (!allowedFormats.includes(file.type)) {
        toast.error('Invalid file format. Please upload a PDF or DOCX file.');
        setFileName('');
        setUploaded(false);
        setText('');
        return;
      }

      setFileName(file.name);
      setUploaded(true);

      try {
        if (file.type === 'application/pdf') {
          // ✅ Read PDF
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

          let extractedText = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            extractedText += textContent.items.map((item) => item.str).join(' ') + '\n';
          }

          setText(extractedText);
        } else {
          toast.success('DOCX file uploaded successfully.');
        }
      } catch (error) {
        console.error('Error reading file:', error);
        toast.error('Failed to read file.');
      }
    }
  };

  return (
    <div className="mt-[2vw] bg-transparent flex items-center justify-center">
     
      <div className="bg-white p-8 rounded-full shadow-lg w-[400px] h-[400px] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Upload Your Resume
        </h1>

        
        <label 
          className="border-2 border-dashed border-gray-300 rounded-full w-72 h-36 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
        >
          {uploaded ? (
            <div className="flex flex-col items-center">
              <p className="text-green-500 font-medium text-center">
                {fileName}
              </p>
              <span className="text-xs text-gray-400">(Click to replace)</span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <FaCloudUploadAlt className="text-5xl text-blue-600 mb-2" />
              <p className="text-gray-500 text-center text-sm">
                Drag & Drop or Click to Upload
              </p>
            </div>
          )}
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept=".pdf, .docx" 
            className="hidden"
          />
        </label>

        
        <button 
        onClick={() => {
          localStorage.setItem('resume', text);
          localStorage.setItem('jobDesc', jobDesc);
          if(jobDesc.trim() === ''){
            toast.error('Please enter job description')
          }else{
          navigate(`/ats-score`)
        }}
      }
          className={`mt-4 w-[150px] ${
            uploaded ? 'bg-blue-600' : 'hidden'
          } text-white py-2 rounded-full font-medium transition hover:opacity-90 flex items-center justify-center`}
          
        >
          Check ATS {' '} <CiLocationArrow1 className='font-bold text-xl'/>
        </button>

        
        <p className="text-xs text-gray-400 text-center mt-4">
          Supported formats: PDF, DOCX (Max size: 5MB)
        </p>
      </div>
      <div className='ml-16'>
        <div className="w-96 h-[400px] bg-gray-100 rounded-lg overflow-y-auto p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Enter job description
        </h2>
        <textarea
  onChange={(e) => setJob(e.target.value)}
  value={jobDesc}
  placeholder="Enter your job description here..."
  className="text-sm text-gray-600 h-[323px] w-[350px] resize-none border border-gray-300 rounded-md p-2 focus:outline-none">
</textarea>

        </div>
      </div>
    </div>
  );
};

export default Read_Resume;
