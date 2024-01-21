import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SymptomButton from "../Components/SymptomButton"
import DataButton from "../Components/DataButton";



function Tracking() {
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
                                <p className="col-start-3 text-text_colour">36.5 C</p>
                                </div>
                                <input type="range" min={0} max="100" value="40" className="range range-info mt-2" />
                            </div>

                            <div>
                                <p className="text-text_colour">Did you take you Medicine?</p>
                                <div className="grid grid-cols-4">
                                    <p>Yes</p>
                                    <div class="flex items-center mb-4">
                                        <input id="checkbox_yes" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                    </div>

                                    <p>No</p>
                                    <div class="flex items-center mb-4">
                                        <input id="checkbox_no" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <p>Symptoms check</p>
                                <div className="flex flex-wrap">
  <SymptomButton buttonName="No Symptoms" />
  <SymptomButton buttonName="Cough" />
  <SymptomButton buttonName="Dizziness" />
  <SymptomButton buttonName="Headache" />
  <SymptomButton buttonName="Fatigue" />
  <SymptomButton buttonName="Sore Throat" />
  <SymptomButton buttonName="Muscle Aches" />
  <SymptomButton buttonName="Heartburn" />
  <SymptomButton buttonName="Fever" />
  <SymptomButton buttonName="Nasal Congestion" />
  <SymptomButton buttonName="Runny Nose" />
  <SymptomButton buttonName="Nausea" />
  <SymptomButton buttonName="Constipation" />
  <SymptomButton buttonName="Diarhea" />
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