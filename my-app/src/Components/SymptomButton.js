// import React from 'react';
// import { useState } from 'react';

// const SymptomButton = ({buttonName}) => {
//     const [isClicked, setIsClicked] = useState(false);
//     const handleButtonClick = () => {
//         //Handle button on click logic
//         setIsClicked(!isClicked);
//         console.log("ITS PRESSED");
//     };


   

//     return (
//             <button type="button" className="bg-white border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={handleButtonClick}>
//                 {buttonName}
//                 </button>

//     );
// }

// export default SymptomButton;

import React, { useState } from 'react';

const SymptomButton = ({ buttonName }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonColor = () => {
    //Handle button on click logic
    setIsClicked(!isClicked);
    console.log("pressed");
  };

//   const buttonClassName = `bg-${isClicked ? "white" : "light_purple"} border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`;
const buttonClassName = isClicked
  ? "bg-medium_purple border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
  : "bg-white border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2";

  return (
    <div>
      <button type="button" className={buttonClassName} onClick={handleButtonColor}> 
        {buttonName}
      </button>
    </div>
  );
}

export default SymptomButton;



// import React from 'react';

// const SymptomButton = () => {
//     const handleButtonClick = () => {
//         console.log('Button Clicked!');
//     };

//     return (
//         <div>
//         <button onClick={handleButtonClick}>Click me</button>
//         </div>
//     );
// }

// export default SymptomButton;