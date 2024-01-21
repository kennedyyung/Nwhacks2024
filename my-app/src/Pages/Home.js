import React from 'react';
import '../App.css'
import DrawerComponent from '../Components/DrawerComponent';
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import TrackingDrawerWithData from '../Components/TrackingDrawerWithData';



function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-aqua_blue h-screen font-Rubik">
                <h1 className="pl-7 pt-10 text-4xl text-white font-Rubik font-[500]">Calendar</h1>
                <p className="pl-7 pt-1 text-xl text-white font-Rubik font-[300]">Track your health day-by-day</p>



                <div class="flex items-center justify-center py-10 h-screen">

                    <div class=" w-full h-full">
                        <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-4xl h-full">
                            <div class="px-4 flex items-center justify-between">
                                <span class="pt-4 text-lg text-base font-Rubik text-text_colour ">January 2024</span>
                                <div class="flex items-center">


                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-5 overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">M</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">W</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">F</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="pt-6">
                                                <div class="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="1" />
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="2" />
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="3" />
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="4" />
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="5" />
                                            </td>
                                            <td >
                                                <DrawerComponent buttonText="6" />
                                            </td>

                                        </tr>
                                        <tr>

                                            <td>
                                                <DrawerComponent buttonText="7" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="8" />

                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="9" />
                                            </td>
                                            <td>
                                            <TrackingDrawerWithData buttonLabel="10" />
                                            </td>
                                            <td>
                                            <TrackingDrawerWithData buttonLabel="11" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="12" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="13" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="14" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="15" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="16" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="17" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="18" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="19" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="20" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="21" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="22" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="23" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="24" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="25" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="26" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="27" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="28" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="29" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="30" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="31" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="px-4 flex items-center justify-between">
                                <span class="pt-8 text-lg text-base font-Rubik text-text_colour">February 2024</span>
                                <div class="flex items-center">


                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-5 overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">M</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">W</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">F</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="w-full h-9 flex justify-center">
                                                    <p class="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="pt-6">
                                                <div class="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                                <div class="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                                <div class="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                                <div class="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                            <DrawerComponent buttonText="1" />
                                            </td>
                                            <td >
                                            <DrawerComponent buttonText="2" />
                                            </td>
                                            <td >
                                            <DrawerComponent buttonText="3" />
                                            </td>

                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="4" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="5" />
                                                
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="6" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="7" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="8" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="9" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="10" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="11" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="12" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="13" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="14" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="15" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="16" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="17" />
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                            <DrawerComponent buttonText="18" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="19" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="20" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="21" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="22" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="23" />
                                            </td>
                                            <td>
                                            <DrawerComponent buttonText="24" />
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </>


    );
}

export default Home;