import React from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';
import toast from "react-hot-toast";

const Ats_Checker = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || !jobDescription) {
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
1. Relevant Keywords: 15/20 * 30% = 22.5%
2. Skill Matching: 18/20 * 25% = 22.5%
3. Experience Alignment: 12/20 * 20% = 12%
4. Education Fit: 8/10 * 10% = 8%
5. Job Title Similarity: 7/10 * 10% = 7%
6. Formatting & Structure: 5/5 * 5% = 5%
Total ATS Score: 77.5%

### **Important Rules:**
- Output ONLY the final score.  
- DO NOT explain why the score was assigned.  
- DO NOT add any commentary.  
- Follow the fixed logic above without deviation.  
  

### **Resume:**  
${resume} and 
job description :
${jobDescription}
`;

    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
const result = await model.generateContent(prompt);
console.log(result.response.text());

      toast.success(`ATS Score Fetched Successfully`);
}
     catch (error) {
      console.error("Error calling Gemini API:", error?.response?.data || error.message);
      toast.error("Failed to calculate ATS score. Please try again later.");
    }
    
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ATS Score Checker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Paste Resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded"
          rows="6"
          placeholder="Paste Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Check ATS Score
        </button>
      </form>

      {/* {scoreDetails && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            ✅ ATS Score: {atsScore.totalScore}%
          </p>
          <ul className="mt-2 space-y-1">
            <li>🔎 Relevant Keywords: {atsScore.relevantKeywords}%</li>
            <li>💼 Skill Matching: {atsScore.skillMatching}%</li>
            <li>📅 Experience Alignment: {atsScore.experienceAlignment}%</li>
            <li>🎓 Education Fit: {atsScore.educationFit}%</li>
            <li>🏆 Job Title Similarity: {atsScore.jobTitleSimilarity}%</li>
            <li>📄 Formatting & Structure: {atsScore.formattingStructure}%</li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Ats_Checker;
