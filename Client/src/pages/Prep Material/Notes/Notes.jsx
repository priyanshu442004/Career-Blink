import React, { useState } from "react";

const notesData = [
  {
    technology: "Core Java",
    link: "https://drive.google.com/file/d/11omWQ7NDmgGal9_YEDjUXVNNsFget4OK/view?usp=sharing",
    description: "Comprehensive Java notes covering core concepts, OOP, collections, and more."
  },
  {
    technology: "HTML/CSS",
    link: "https://www.emgywomenscollege.ac.in/templateEditor/kcfinder/upload/files/HTML%20&%20CSS.pdf",
    description: "Detailed HTML/CSS notes for beginners and professionals to build beautiful web pages."
  },
  {
    technology: "React",
    link: "https://drive.google.com/file/d/1AjzURWmsRU_txMMPMsvYhWOUI3Phy6ak/view?usp=sharing",
    description: "Modern React.js notes covering hooks, components, state management, and real-world projects."
  },
  {
    technology: "Python",
    link: "https://drive.google.com/file/d/1TnKcSpk5ikL1fGxMdYqJRZP7Eiy04Zhy/view?usp=sharing",
    description: "Complete Python notes covering basics to advanced topics like OOP and data science libraries."
  },
  {
    technology: "C++",
    link: "https://drive.google.com/file/d/1vmjUi6jxjlgWyfyota0D0xv6D8QQVtdo/view?usp=sharing",
    description: "In-depth C++ notes covering data structures, algorithms, OOPs, STL, and problem solving."
  },
  {
    technology: "Node.js",
    link: "https://drive.google.com/file/d/18vvuN3PiuF-rATpALKplcXIe54emnbPp/view?usp=sharing",
    description: "Notes on Node.js including Express.js, APIs, event loop, databases, and backend concepts."
  },
  {
    technology: "SQL",
    link: "https://drive.google.com/file/d/1xvdSmqe8XDjLUbCRZivLjdF4hygDkid1/view?usp=sharing",
    description: "Solved SQL notes covering queries, database management, indexing, and optimization."
  },
];

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notesData.filter(note =>
    note.technology.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="pt-32 max-w-3xl mx-auto text-center mb-8 px-4">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Study Material Hub 📚</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Access high-quality, curated notes for your favorite technologies. Choose your topic below and dive into learning with our handpicked resources designed to help you succeed!
        </p>
      </div>

      
      <div className="flex justify-center mb-12 px-4">
        <input
          type="text"
          placeholder="🔍 Search by technology name..."
          className="w-full max-w-md px-6 py-3 bg-white/70 backdrop-blur-md border border-blue-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-gray-400 transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-600">{note.technology}</h2>
              <p className="text-gray-600 text-sm">{note.description}</p>
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white py-2 px-6 rounded-full font-semibold transition-all duration-300"
              >
                📥 Download Notes
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 font-semibold text-lg col-span-2">No matching notes found 🚫</p>
        )}
      </div>
      
    </div>
  );
};

export default Notes;
