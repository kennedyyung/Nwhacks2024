import React, { useState } from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SymptomButton from "../Components/SymptomButton"
import DataButton from "../Components/DataButton";

const symptomsList = [
    "cough",
    "fever",
    "dizziness",
    "fatigue",
    "headache",
    "soreness",
    "congestion",
    "soreThroat",
    "diarrhea",
    "constipation",
    "heartBurn",
    "runnyNose",
    "other",
    "noSymptoms",
  ];

function Tracking() {

    const [formInfo, setFormInfo] = useState({
        date: "01-24-2024",
        temperature: 36.8,
        medication: true,
        symptoms: Object.fromEntries(symptomsList.map(symptom => [symptom, false])),
      });

    const handleButtonClick = (buttonName) => {
        // setFormInfo((formInfo) => {
        //     formInfo = {
        //     // date: "01-24-2024",
        //     // temperature: 36.8,
        //     // medication: true,
        //     // symptoms: {
        //     // [buttonName]: !formInfo.symptom[buttonName],
        console.log("here");
      };
    
    //   const handleDataButtonClick = () => {
        // Perform the API request with the formInfo object
        // You can use fetch or any other method to send the data to your API
        // fetch('http://localhost:8080/enterData/', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formInfo),
        // })
        //   .then(response => response.json())
        //   .then(data => console.log('API response:', data))
        //   .catch(error => console.error('Error:', error));

        const handleDataButtonClick = () => { 
            console.log("here (1)")
            const requestBody =
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				// body: JSON.stringify(formInfo),
                body: {hi: "hi"},
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
        };
    //  };

    return (
        <>
            <NavBar />
            <div className ="bg-aqua_blue h-screen font-Rubik">
            <h1 className="pl-7 pt-10 text-5xl text-white font-[500]">Track</h1>
                <p className="pl-7 pt-2 text-white">Enter your health details</p>

                <div className="flex items-center justify-center py-10 h-screen text-text_colour">

                    <div className=" w-full h-full">
                        <div className="p-8 p-5 bg-white rounded-4xl h-full">
                            <p className="pt-2 text-text_colour ">Health tracked Jan 21, 2024</p>

                            <div>
                                <div className="mt-4 grid grid-cols-3">
                                <p className="col-start-1 text-text_colour">Temperature</p>
                                <p className="col-start-3 text-text_colour">{formInfo.temperature} C</p>
                                </div>
                                <input type="range" min={0} max={100} value={36.8} readOnly className="range range-info mt-2" />
                            </div>

                            <div>
                                <p className="text-text_colour">Did you take you Medicine?</p>
                                <div className="grid grid-cols-4">
                                    <p>Yes</p>
                                    <div className="flex items-center mb-4">
                                        <input id="checkbox_yes" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                    </div>

                                    <p>No</p>
                                    <div className="flex items-center mb-4">
                                        <input id="checkbox_no" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <p>Symptoms check</p>
                                <div className="flex flex-wrap">
  <SymptomButton buttonName="No Symptoms" onClick={() => handleButtonClick("No Symptoms")}/>
  <SymptomButton buttonName="Cough" onClick={() => handleButtonClick("Cough")}/>
  <SymptomButton buttonName="Dizziness" onClick={() => handleButtonClick("Dizziness")}/>
  <SymptomButton buttonName="Headache" onClick={() => handleButtonClick("Headache")}/>
  <SymptomButton buttonName="Fatigue" onClick={() => handleButtonClick("Fatigue")}/>
  <SymptomButton buttonName="Sore Throat" onClick={() => handleButtonClick("Sore Throat")}/>
  <SymptomButton buttonName="Muscle Aches" onClick={() => handleButtonClick("Muscle Aches")}/>
  <SymptomButton buttonName="Heartburn" onClick={() => handleButtonClick("Heartburn")}/>
  <SymptomButton buttonName="Fever" onClick={() => handleButtonClick("Fever")}/>
  <SymptomButton buttonName="Nasal Congestion" onClick={() => handleButtonClick("Nasal Congestion")}/>
  <SymptomButton buttonName="Runny Nose" onClick={() => handleButtonClick("Runny Nose")}/>
  <SymptomButton buttonName="Nausea" onClick={() => handleButtonClick("Nausea")}/>
  <SymptomButton buttonName="Constipation" onClick={() => handleButtonClick("Constipation")}/>
  <SymptomButton buttonName="Diarrhea" onClick={() => handleButtonClick("Diarrhea")}/>
</div>

                            </div>
                            <div className="flex items-center justify-center">
                                <Link to="/">
                                <DataButton />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Tracking;