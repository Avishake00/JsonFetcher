// UpperRightComponent.js
import React, { useContext, useState,useEffect } from 'react';
import { Checkbox } from '../ui/checkbox';


const UpperRightComponent = () => {
  const [fileType, setFileType] = useState('');
  const [characterEncoding, setCharacterEncoding] = useState('');
  const [delimiter, setDelimiter] = useState('');


  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
  };

  const handleCharacterEncodingChange = (event) => {
    setCharacterEncoding(event.target.value);
  };

  const handleDelimiterChange = (event) => {
    setDelimiter(event.target.value);
  };

 

  return (
    <div className="card overflow-auto flex gap-2 bg-white text-black">
        <div className='row '>

      <h2>Step 2:</h2>
        </div>

        <div className='row'>
            <h2 className='mb-2 text-xl font-semibold'>Specify Format</h2>

      <div className="input-group ">
        <label htmlFor="fileType" className='font-semibold'>File Type:</label>
        <select id="fileType" value={fileType} onChange={handleFileTypeChange} className='border border-black p-1 rounded-md'>
          <option value="">Select File Type</option>
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="characterEncoding" className='font-semibold'>Character Encoding:</label>
        <select id="characterEncoding" value={characterEncoding} onChange={handleCharacterEncodingChange} className='border border-black p-1 rounded-md'>
          <option value="">Select Character Encoding</option>
          <option value="utf-8">UTF-8</option>
          <option value="utf-16">UTF-16</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="delimiter" className='font-semibold'>Delimiter:</label>
        <select id="delimiter" value={delimiter}  onChange={handleDelimiterChange} className='border border-black p-1 rounded-md'>
          <option value="">Select Delimiter</option>
          <option value="comma">Comma (,)</option>
          <option value="semicolon">Semicolon (;)</option>
          <option value="tab">Tab (\t)</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="delimiter" className='font-semibold'>Has Header</label>
       <Checkbox checked className='mt-1'/>
      </div>
      

      </div>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 10px;
          border-radius: 8px;
        }

        .input-group {
          display: flex;
          margin-bottom: 15px;
        }

        label {
          margin-right: 10px;
          align-self: center;
        }

        select {
          flex: 1;
          padding: 8px;
        }
      `}</style>
    </div>
  );
};

export default UpperRightComponent;
