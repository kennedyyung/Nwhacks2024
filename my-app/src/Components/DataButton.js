import React, { useState } from 'react';

const DataButton = () => {
  // const [isClicked, setIsClicked] = useState(false);

  const formInfo = {
    date: "01-24-2024",
    temperature: 36.8,
    medication: true,
    symptom: {
    cough : true, 
    fever : false,
    dizziness : false,
    fatigue : true,
    headache : false,
    soreness : true,
    congestion : false,
    soreThroat : false,
    diarrhea : false,
    constipation : true,
    heartBurn : true,
    runnyNose : false,
    other : false,
    noSymptoms : false,
      },
    };

  const handleButtonClick = () => {
    //Handle button on click logic
    // setIsClicked(!isClicked);
            const requestBody =
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				// body: JSON.stringify(formInfo),
                body: JSON.stringify(formInfo),
			}
		fetch('http://localhost:8080/enterData/', requestBody)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log('result:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    console.log("pressed2");
  };

//   const buttonClassName = `bg-${isClicked ? "white" : "light_purple"} border border-text_colour font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`;
return (
    <button type="button" className="text-white bg-aqua_blue font-Rubik rounded-full text-sm px-24 py-2.5 text-center me-2 mb-2 mt-5" onClick={handleButtonClick}>Save Health Data</button>
    
        );
}

export default DataButton;
