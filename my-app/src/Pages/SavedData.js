// import React from 'react';
// import '../App.css'
// import Tracking from "../Pages/Tracking";
// import {useState, useEffect} from 'react';


// const Profile = () => {

//         const formInfo = {
//             date: "01-24-2024",
//             temperature: 36.8,
//             medication: true,
//             symptom: {
//                 cough : true, 
//                 fever : false,
//                 dizziness : false,
//                 fatigue : true,
//                 headache : false,
//                 soreness : true,
//                 congestion : false,
//                 soreThroat : false,
//                 diarrhea : false,
//                 constipation : true,
//                 heartBurn : true,
//                 runnyNose : false,
//                 other : false,
//                 noSymptoms : false,
//             }
//         }

//         const useEffect = () => {
//             fetch("/entryData", {
//                 method: "POST",
//                 headers: {
//                     'Content-type': "application/json"
//                 },
//                 body: JSON.stringify(formInfo)
//             })
//             .then(res => res.json())
//             .then(data => console.log(data))
//         }   

//     return (
//         <>
//             <NavBar />
//             <button onClick={Profile} data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 h-50">
//                 <h1>Submit</h1>
//             </button>

//         </>

//     );
// }

// export default SavedData;