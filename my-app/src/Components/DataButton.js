import React, { useState } from 'react';

const DataButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    //Handle button on click logic
    setIsClicked(!isClicked);
    console.log("pressed");
  };

//   const buttonClassName = `bg-${isClicked ? "white" : "light_purple"} border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`;
return (
    <button type="button" class="text-white bg-aqua_blue font-Rubik rounded-full text-sm px-24 py-2.5 text-center me-2 mb-2 mt-5" onClick={handleButtonClick}>Save Health Data</button>
    
        );
}

export default DataButton;
