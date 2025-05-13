import React, { useEffect } from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";

const ATS_calc = () => {
  const [ats, setAts] = useState(0);
  const resumeDes = localStorage.getItem("resume");
  const jobDes = localStorage.getItem("jobDesc");
  const isAllowed = JSON.parse(localStorage.getItem('isAllowed')) === true

  

  const handleSubmit = async (e) => {

    if (!resumeDes || !jobDes) {
      toast.error("Please fill in all fields");
      return;
    }

    const API_KEY = "AIzaSyC4kZKYfxLI7vJF2tNTX91blLmzjqlgYUk";

    const prompt = `You are an ATS (Applicant Tracking System) evaluator.  
You MUST evaluate the resume based on the following FIXED scoring rules.  
Follow the instructions and score exactly as per the given criteria — DO NOT DEVIATE.  

---

### **1. Relevant Keywords (30%):**  
- If 0–5 relevant keywords are found → **Score = 5/20**  
- If 6–10 relevant keywords are found → **Score = 10/20**  
- If 11–15 relevant keywords are found → **Score = 15/20**  
- If 16–20 relevant keywords are found → **Score = 20/20**  

---

### **2. Skill Matching (25%):**  
- If no matching skills are found → **Score = 0/20**  
- If 1–5 matching skills → **Score = 5/20**  
- If 6–10 matching skills → **Score = 10/20**  
- If 11–15 matching skills → **Score = 15/20**  
- If 16–20 matching skills → **Score = 20/20**  

---

### **3. Experience Alignment (20%):**  
- If no relevant experience → **Score = 0/20**  
- If minimal relevant experience (e.g., unrelated internships) → **Score = 5/20**  
- If moderate relevant experience → **Score = 10/20**  
- If strong relevant experience → **Score = 15/20**  
- If extensive and highly relevant experience → **Score = 20/20**  

---

### **4. Education Fit (10%):**  
- If the degree is unrelated → **Score = 0/10**  
- If the degree is somewhat related → **Score = 5/10**  
- If the degree is directly related → **Score = 10/10**  

---

### **5. Job Title Similarity (10%):**  
- If the resume contains no related job titles → **Score = 0/10**  
- If the resume contains partially related job titles → **Score = 5/10**  
- If the resume contains exactly matching job titles → **Score = 10/10**  

---

### **6. Formatting & Structure (5%):**  
- If the resume is poorly formatted → **Score = 0/5**  
- If the resume is readable but unorganized → **Score = 2/5**  
- If the resume is clear and well-organized → **Score = 5/5**  

---

### **💡 Output Format (STRICTLY FOLLOW THIS):**  

Strictly return the output in this format without additional commentary:
1. Relevant Keywords: 15/20 * 30% = 22.5/30
2. Skill Matching: 18/20 * 25% = 22.5/25
3. Experience Alignment: 12/20 * 20% = 12/20
4. Education Fit: 8/10 * 10% = 8/10
5. Job Title Similarity: 7/10 * 10% = 7/10
6. Formatting & Structure: 5/5 * 5% = 5/5
Total ATS Score: 77.5

### **Important Rules:**
- Output ONLY the final score.  
- DO NOT explain why the score was assigned.  
- DO NOT add any commentary.  
- Follow the fixed logic above without deviation.  
  

### **Resume:**  
${resumeDes} and 
job description :
${jobDes}
`;

    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);

      const match = result.response
        .text()
        .match(/Total ATS Score:\s*([\d.]+)/);
      if (match) {
        const score = parseFloat(match[1]); 
        setAts(score); 
        localStorage.setItem("ats", score);
        localStorage.setItem("atsDetails", result.response.text());
        localStorage.setItem("isAllowed", false);
        toast.success(`ATS Score Fetched Successfully`);
        window.location.href = "/ATS-Score";
      }
      

    } catch (error) {
      console.error(
        "Error calling Gemini API:",
        error?.response?.data || error.message
      );
      toast.error("Failed to calculate ATS score. Please try again later.");
    }
  };

  useEffect(() => {

    if (!isAllowed) {
      window.location.href = "/ATSChecker";
      localStorage.setItem("hello", true);
    }
    else{

      handleSubmit(); 
    }
  }, []); 

  return (
    isAllowed && (<div className="overflow-x-hidden  bg-gradient-to-b from-blue-50 to-blue-100 pb-20 h-screen flex flex-col items-center justify-center w-full">
     
     <BounceLoader />
     <br />
     <span className="text-2xl font-bold text-gray-800">

     Calculating ATS Score...
     </span>
    </div>)
  );
};

export default ATS_calc;
