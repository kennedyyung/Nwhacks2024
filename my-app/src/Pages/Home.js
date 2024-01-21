import React from 'react';
import '../App.css'
import DrawerComponent from '../Components/DrawerComponent';
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";



function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-aqua_blue h-screen">
                <h1 className="pl-7 pt-10 text-5xl text-white font-Rubik font-[500]">Calendar</h1>
                <p className="pl-7 pt-2 text-white font-Rubik">Track your health day-by-day</p>



                <div className="flex items-center justify-center py-10 h-screen">

                    <div className=" w-full h-full">
                        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-4xl h-full">
                            <div className="px-4 flex items-center justify-between">
                                <span className="pt-4 text-lg text-base font-Rubik text-text_colour ">January 2024</span>
                                <div className="flex items-center">


                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-5 overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">M</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">W</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">F</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pt-6">
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
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
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">8</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">9</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">10</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">11</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">12</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">13</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">14</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">15</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">16</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">17</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">18</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">19</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">20</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">21</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">22</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">23</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">24</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">25</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">26</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">27</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">28</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">29</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">30</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">31</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="px-4 flex items-center justify-between">
                                <span className="pt-8 text-lg text-base font-Rubik text-text_colour">February 2024</span>
                                <div className="flex items-center">


                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-5 overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">M</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">W</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">T</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">F</p>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="w-full h-9 flex justify-center">
                                                    <p className="text-base font-medium text-center text-text_colour ">S</p>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pt-6">
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center"></div>
                                            </td>
                                            <td >
                                                <div className="px-3 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">1</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">2</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">3</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">4</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">5</p>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">6</p>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">7</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">8</p>
                                                </div>
                                                {/* <div className="w-full h-full">
                                
                                <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                    <a  role="link" tabindex="0" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</a>
                                </div>
                            </div> */}
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">9</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">10</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">11</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">12</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">13</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">14</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">15</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">16</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">17</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">18</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">19</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">20</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">21</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">22</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">23</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">24</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500 ">25</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">26</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="px-2 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
                                                    <p className="text-base text-gray-500  font-medium">27</p>
                                                </div>
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