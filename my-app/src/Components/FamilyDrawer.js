import { Link } from "react-router-dom";

import React from 'react';

const FamilyDrawer = () => {
  return (
    <div className="drawer drawer-bottom font-Rubik text-text_colour">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
            <div className=" mt-3 card w-76 bg-light_purple">
                <div className="card-body flex items-center justify-center font-Rubik">
                    <p>Family Health</p>
                    <p className="font-[300]">Monitor your loved one's health</p>
                </div>
            </div>
        </label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 h-80 min-w-full bg-white grid grid-rows">
          <p >Switch family health profiles</p>

          <div className=" mt-5">
            <img
                src="/profiles.png"
                className="h-125 w-100"
                />
            
          </div>
          <Link to="/Tracking">
          <button type="button" class="text-white bg-aqua_blue font-Rubik rounded-full text-sm px-40 py-2.5 text-center me-2 mb-2 mt-5">Track</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default FamilyDrawer;
