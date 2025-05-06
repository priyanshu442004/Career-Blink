
import React, { useEffect } from "react";
import {fetchAllQuestion} from '../DSA/QuestionService'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ClipLoader from "react-spinners/ClipLoader";

const DSA = () => {
  const [search, setSearch] = useState('');
  const [questions,setQuestions] = useState([]);
  const [status, setStatus] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [loader,setLoader] = useState(false);

  
const filteredQuestions = questions.filter((question) => {
  const matchesSearch = question.name.toLowerCase().includes(search.toLowerCase());
  const matchesDifficulty = difficulty === 'All' || question.difficulty === difficulty;
  return matchesSearch && matchesDifficulty;
});

 

  const [solvedProblems, setSolvedProblems] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [totalSolved, setTotalSolved] = useState(solvedProblems.easy + solvedProblems.medium + solvedProblems.hard);

  const loadDSAQuestion = async () => {
       try{
        setLoader(true);
        const data = await fetchAllQuestion();
        setQuestions(data);
        setLoader(false);
       } catch(err){
        alert("Failed to load Question");
       }
  }
   useEffect(() =>{
    loadDSAQuestion();
   },[]);
  

  const resetFilters = () => {
    setSearch('');
    setStatus('All');
    setDifficulty('All');
   
  };

  
  return (

      <div className="flex flex-col justify-center items-center space-y-4 text-center bg-gradient-to-b from-blue-50 to-blue-100 pb-20">

        <h1 className="text-4xl font-extrabold text-indigo-600 animate-bounce  mt-30">
          Master DSA Pattern
        </h1>
        <h2 className="text-lg text-gray-1000 max-w-xl">
          🚀 Practice curated{" "}
          <span className="font-semibold text-black">LeetCode</span> problems
          organized by proven patterns to ace your coding interviews!
        </h2>

        <div className="bg-white place-self-center w-11/12 max-w-large
                flex flex-col p-7 min-h-[520px] border-4 border-gray-300 rounded-xl
                hover:border-blue-500 focus-within:border-blue-400 transition-all duration-300 shadow-lg">
                  <div className="flex flex-wrap md:flex-nowrap justify-between bg-zinc-900 p-6 rounded-lg text-white font-semibold">
      
      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">Search</label>
          <div className="flex items-center bg-zinc-800 rounded px-2">
            <input
              type="text"
              placeholder="Search problems..."
              className="bg-transparent w-full p-2 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch />
          </div>
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 bg-zinc-800 rounded">
            <option>All</option>
            <option>Solved</option>
            <option>Unsolved</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Difficulty</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="w-full p-2 bg-zinc-800 rounded">
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

      

        <div
        onClick={resetFilters}
        className="mt-8 hover:cursor-pointer">
          Reset all Filters
        </div>
      </div>

      
      <div className="w-full md:w-1/4 mt-6 md:mt-0 text-center">
        <h2 className="text-lg font-bold mb-4">{totalSolved} / 20 Solved</h2>
        {[
          { label: 'Easy', total: 10, solved: solvedProblems.easy  },
          { label: 'Medium', total: 5, solved: solvedProblems.medium  },
          { label: 'Hard', total: 5, solved: solvedProblems.hard  }
        ].map(({ label, total, solved }) => {
          const percentage=(solved/total) *100;
          return(
          <div key={label} className="mb-3 text-left">
            <div className="flex justify-between text-sm mb-1">
              <span>{label}</span>
              <span>{solved} / {total}</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" 
              style={{width:`${percentage}%`}}
              />
            </div>
          </div>
          )
})}
      </div>
    </div>
    <div className="overflow-x-auto bg-zinc-900 rounded-lg shadow-lg p-4 mt-4">
      <table className="min-w-full table-auto">
        <thead className="bg-zinc-800">
          <tr>
            <th className="py-3 px-6 text-left text-md text-white font-semibold">Question Name</th>
            <th className="py-3 px-4 text-left text-md text-white font-semibold">Difficulty</th>
            <th className="py-3 px-6 text-center text-md  text-white font-semibold">Status</th>
          </tr>
        </thead>
       { loader?(<ClipLoader color="#ffffff" />):( <tbody>
          {filteredQuestions.map((question) => (
            <tr key={question.id} className="hover:bg-zinc-800 hover:cursor-pointer transition-all duration-200">
              <td className="py-4 px-6 text-md text-white font-bold">{question.name}</td>
              <td className={`py-4 px-6 text-md font-bold ${question.difficulty=="Easy"?"text-green-500":
                question.difficulty=="Medium"?"text-yellow-500":
                question.difficulty=="Hard"?"text-red-500":""
              }`}>{question.difficulty}</td>
              <td className="py-4 px-6 text-center">
                <input
                  type="checkbox"
                  checked={question.completed}
                  onChange={() => handleToggleCompleted(question.id)}
                  className="w-6 h-6 rounded-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>)}
      </table>
    </div>
        </div>

        

      </div>

  );
};
export default DSA;
