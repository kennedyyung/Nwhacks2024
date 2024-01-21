import React from 'react';
import '../App.css'
import NavBar from "../Components/NavBar";
import FamilyDrawer from "../Components/FamilyDrawer";



function Profile() {
    return (
        <>
            <NavBar />
            <div>
                <div className ="bg-aqua_blue h-screen font-Rubik">
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                    <h1 className="pl-7 pt-10 text-4xl text-white font-[500]">Miranda Pan</h1>
                    <p className="pl-7 pt-1 text-xl text-white font-[300]">Personalize your health</p>
                        </div>
                        <img
                        src="/pfp.png"
                        className="h-75 w-55 pt-10"

                    />

                    </div>

                    <div className="flex items-center justify-center py-10 h-screen text-text_colour">

                        <div className=" w-full h-full">
                            <div className="p-8 p-5 bg-white rounded-4xl h-full">
                                <p className="text-xl">Personal Information</p>
                                <div className="grid grid-cols-4 mt-2">
                                    <p className='col-span-2'>First Name</p>
                                    <p className="font-[300]">Miranda</p>
                                </div>
                                <hr class="h-px mt-1 bg-black border-1 mb-2"></hr>
                                <div className="grid grid-cols-4 mt-1">
                                    <p className='col-span-2'>Last Name</p>
                                    <p className="font-[300]">Pan</p>
                                </div>
                                <hr class="h-px mt-1 bg-black border-1 mb-2"></hr>
                                <div className="grid grid-cols-4 mt-1">
                                    <p className='col-span-2'>Email</p>
                                    <p className="font-[300]">mpan@gmail.com</p>
                                </div>
                                <hr class="h-px mt-1 bg-black border-1 mb-2"></hr>
                                <div className="grid grid-cols-4 ">
                                    <p className='col-span-2'>Phone</p>
                                    <p className='col-span-2 font-[300]'>236-555-7585</p>
                                </div>
                                <hr class="h-px mt-1 bg-black border-1 mb-2"></hr>
                                <div className="grid grid-cols-4 ">
                                    <p className='col-span-2'>Birthday</p>
                                    <p className='col-span-2 font-[300]'>Apr 24, 1999</p>
                                </div>
                                <hr class="h-px mt-1 bg-black border-1 mb-2"></hr>

                                
                                    <p className="text-xl mt-5">Your Health Profiles</p>
                                    <div className=" mt-3 card w-76 bg-light_purple">
                                        <div className="card-body flex items-center justify-center font-Rubik">
                                            <p>Personal Health</p>
                                            <p className="font-[300]">Monitor your own health</p>
                                        </div>
                                    </div>
                                    <FamilyDrawer />
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Profile;