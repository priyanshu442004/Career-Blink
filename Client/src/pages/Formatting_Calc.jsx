import React, { useEffect } from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";

const Formatting_Calc = () => {
  const resumeDes = localStorage.getItem("resume");
  const isAllowed = JSON.parse(localStorage.getItem('isAllowed')) === true

  

  const handleSubmit = async (e) => {

    if (!resumeDes) {
      toast.error("Please upload your resume");
      return;
    }

    const API_KEY = "AIzaSyC4kZKYfxLI7vJF2tNTX91blLmzjqlgYUk";

    const prompt = `
### You are an ATS Resume Optimization Expert.  
You MUST evaluate the resume strictly based on the following FIXED rules.  
Follow the instructions and provide detailed feedback ONLY as per the given criteria — DO NOT DEVIATE.  

---

## 1. Formatting & Readability (20%)  
- If the resume contains inconsistent fonts, excessive colors, or poor spacing → Flag as an issue.  
- If section headings are missing or unclear → Flag as an issue.  
- If the resume has long paragraphs instead of bullet points → Suggest using concise bullet points.  
- If the resume lacks proper sectioning (Education, Experience, Skills, Projects) → Flag as an issue.  
- If unnecessary personal details (photo, full address, marital status) are included → Recommend removal.  

---

## 2. Action-Oriented Language (20%)  
- Identify weak, passive phrases like *“Responsible for”* or *“Worked on”* and suggest stronger action verbs such as *"Developed," "Optimized," "Increased," "Reduced," "Implemented," "Led," "Engineered."*  
- Detect vague descriptions (e.g., *"Worked on a website"*) and suggest quantified, impact-driven versions (e.g., *"Developed a website that improved user engagement by 30%"*).  
- Highlight sentences that lack measurable results and recommend adding data (e.g., “Managed social media” → “Managed social media, increasing engagement by 40% in 6 months”).  

---

## 3. ATS Keyword Optimization (20%)  
- Identify missing or weak industry-relevant keywords based on the job description.  
- Highlight any overuse of generic keywords and suggest more targeted, job-specific keywords.  
- If no technical skills/tools are listed in the Skills section, flag it and suggest adding relevant ones.  

---

## 4. Experience & Project Descriptions (20%)  
- If job titles are unclear or inconsistent, flag them.  
- If descriptions lack achievements, recommend adding impact-driven details (e.g., *"Contributed to XYZ project"* → "Designed XYZ feature, reducing load time by 50%").  
- Identify missing context (e.g., what the project achieved, technologies used, outcomes).  

---

## 5. Resume Length & Conciseness (10%)  
- If the resume is too short (<1 page) for an experienced candidate, flag it.  
- If the resume is too long (>2 pages), suggest removing redundant content.  
- Identify and recommend removal of unnecessary details (e.g., school projects for senior-level roles).  

---

## 6. Grammar, Spelling & Consistency (10%)  
- Flag any grammar/spelling errors.  
- Ensure consistent punctuation (e.g., using periods at the end of some bullet points but not others).  
- Highlight tense inconsistencies (e.g., past tense for previous jobs, present tense for current roles).  

---

### 💡 Output Format (STRICTLY FOLLOW THIS):  

Strictly return the output in this format without additional commentary:  

Formatting Issues:  
 [Issue 1] → [Suggested Fix]  
 [Issue 2] → [Suggested Fix]  

Weak Language & Impact:  
 "Worked on improving the UI" → "Redesigned UI, reducing user drop-off rate by 25%"  
 "Managed a team" → "Led a team of 5, successfully delivering 3 projects on time"  

Keyword & Skill Gaps:  
 Missing keywords: [List of missing relevant keywords]  
 Suggested improvements: [Specific ATS-friendly wording]  

Experience Section Issues:  
 [Issue 1] → [Suggested Fix]  

Length & Conciseness Issues:  
 [Issue 1] → [Suggested Fix]  

Grammar & Spelling Errors:  
 [Issue 1] → [Corrected Version]  

---

### Important Rules:  
- Output ONLY the final feedback as per the above format.  
- DO NOT explain why changes are needed—just provide actionable suggestions.  
- DO NOT include unnecessary commentary.  
- DO NOT DEVIATE from the scoring and feedback logic.  

---

### Resume:  
${resumeDes}`;

    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      
        localStorage.setItem("formattingDetails", result.response.text());
        localStorage.setItem("isAllowed", false);
        toast.success(`Success`);
        window.location.href = "/Formatting-Resume";
      
      

    } catch (error) {
      console.error(
        "Error calling Gemini API:",
        error?.response?.data || error.message
      );
      toast.error("Failed to calculate ATS score. Please try again later.");
      window.location.href = "/FormattingTips";
    }
  };

  useEffect(() => {

    if (!isAllowed) {
      window.location.href = "/FormattingTips";
      localStorage.setItem("hello", true);
    }
    else{

      handleSubmit(); 
    }
  }, []); 

  return (
    isAllowed && (<div className="overflow-x-hidden bg-[url('../src/assets/AIMOCK/mock1.jpg')] bg-cover bg-center h-screen flex flex-col items-center justify-center w-full">
     
     <BounceLoader />
     <br />
     <span className="text-2xl font-bold text-gray-800">

     Collecting data...
     </span>
    </div>)
  );
};

export default Formatting_Calc;
