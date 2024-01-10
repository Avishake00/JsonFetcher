// LowerComponent.js
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LowerComponent = () => {
  const initialElements = [
    "Product Id",
    "Subcategory",
    "Title",
    "Price",
    "Popularity",
    "Description",
    "Rating",
    "UTM Source",
    "UTM Medium",
  ];
  const [selectedElements, setSelectedElements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleUpClick = () => {
    if (currentIndex < initialElements.length) {
      setSelectedElements([...selectedElements, initialElements[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDownClick = () => {
    if (currentIndex > 0) {
      const newSelectedElements = [...selectedElements];
      newSelectedElements.pop();
      setSelectedElements(newSelectedElements);
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <div className="card overflow-auto flex gap-2 bg-gray-300 w-2/3 h-[400px] text-sm">
      <div className="col">
        <div className="row">
        <Checkbox checked />
          <p>Step 3:</p>
        </div>
      </div>

      <div className="col ">
        <p className="font-semibold pl-2 pb-2 text-xl">Display Handling</p>
        

        
        <p className="text-sm font-semibold p-2">Select the feilds to be displayed</p>
        <div className="boxes-container">
          <div className="box text-center ">
            <p className="box-title">Available Feilds</p>
            <div className="elements-box card text-center h-52 overflow-y-auto bg-white">
              {initialElements.map((element, index) => (
                <div key={index} className="element-card bg-[#0f172a] text-white">
                  {element}
                </div>
              ))}
            </div>
          </div>

          <div className="buttons p-4">
            <button onClick={handleUpClick} className="text-xl"> 
              <FaArrowAltCircleRight />
            </button>
            <button onClick={handleDownClick} className="text-xl">
              <FaArrowAltCircleLeft />
            </button>
          </div>

          <div className="box text-center">
            <p className="box-title">Feilds to be Displayed</p>
            <div className="elements-box chosen-elements-box card text-center h-52 overflow-y-auto bg-white">
              {selectedElements.map((element, index) => (
                <div key={index} className="element-card bg-[#0f172a] text-white">
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          padding: 20px;
          margin: 10px;
          border-radius: 8px;
        }

        .boxes-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .box {
          flex: 1;
          padding: 10px;
        }

        .box-title {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .elements-box {
          display: flex;
          flex-direction: column; /* Display elements in a vertical manner */
        }

        .element-card {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 5px;
          border-radius: 4px;
          max-height: 100px; /* Set a maximum height for the card */
        }



        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 15px;
        }

        button {
          margin-bottom: 10px;
          padding: 8px;
          cursor: pointer;
        }

        .row {
          display: flex;
          align-items: center;
        }

        p {
          margin-left: 5px;
        }

        /* Adjusted text size */
        .text-xl {
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default LowerComponent;
