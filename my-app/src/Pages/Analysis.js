import React from 'react';
import '../App.css'
import NavBar from "../Components/NavBar";



function Analysis() {
    return (
        <>
            <NavBar />
            <div>
                <div className ="bg-aqua_blue h-screen font-Rubik">
                    <h1 className="pl-7 pt-10 text-4xl text-white font-[500]">Analysis</h1>
                    <p className="pl-7 pt-1 text-white font-[300] text-xl">View your health trends</p>

                    <div className="flex items-center justify-center py-10 h-screen text-text_colour">

                        <div className=" w-full h-full">
                            <div className="p-8 p-5 bg-white rounded-4xl h-full">
                                <p className="text-xl">Overview</p>
                                <p className="font-[300] mt-2">Based on your experiences, here are health trends suggested to bring up to your doctor.</p>
                                <div className="mt-2">
                                <p>1) Continuous Fatigue: <p2 className="font-[300]"> Description here</p2></p>
                                <p>2) Persistent Cough: <p2 className="font-[300]"> Description here</p2></p>
                                <p>3) Ongoing Nasal Congestion: <p2 className="font-[300]"> Description here</p2></p>
                                </div>
                                <p className="font-[300] text-xs mt-5">*These are all suggestions. Please contact a health professional if you have health concerns</p>

                                <div>
                                    <p className="text-xl mt-5">Temperature Summary</p>
                                </div>
                                <img
                                    src="/temp.png"
                                    className="rounded-xl mt-2"
                                    />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Analysis;

