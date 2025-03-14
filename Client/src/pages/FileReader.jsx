import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const FileReader = () => {
  const [text, setText] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let extractedText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          extractedText += textContent.items.map((item) => item.str).join(' ') + '\n';
        }

        setText(extractedText);
      } catch (error) {
        console.error('Error reading PDF:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <textarea value={text} readOnly rows={10} cols={50} />
    </div>
  );
};

export default FileReader;
