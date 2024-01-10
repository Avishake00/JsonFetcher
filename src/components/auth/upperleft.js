"use client";
import React, { useContext, useEffect } from "react";

const UpperLeftComponent = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file (e.g., validate the type or perform further actions)
      onFileChange(file);
    }

	const filename=event.target.files[0].name;
  };

  
  return (
    <div className="card overflow-auto flex gap-6 mt-4  bg-gray-300  ">
      <div className="row ml-5">Step 1:</div>
      <div className="row">
        <h2 className="mb-4 text-xl font-semibold">Select File</h2>
        <input
          className="font-semibold"
          type="file"
          accept=".json,.csv"
          onChange={handleFileChange}
        />
        <p className="mt-6 mb-16 font-semibold">
          Supported file type(s) : CSV,JSON
        </p>
      </div>

      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 10px;
          border-radius: 8px;
        }

        input {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default UpperLeftComponent;
