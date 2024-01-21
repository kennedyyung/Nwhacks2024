import React from 'react';
import '../App.css'
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";



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
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">No Symptoms</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cough</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dizziness</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Headache</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fatigue</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sore Throat</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Muscle Aches</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Heartburn</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fever</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nasal Congestion</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Runny Nose</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nausea</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Constipation</button>
                                <button type="button" class="bg-white border border-text_colour focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Diarrhea</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Tracking;