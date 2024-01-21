import { Link } from "react-router-dom";

import React from 'react';

const DrawerComponent = ({ buttonText }) => {
  return (
    <div className="drawer drawer-bottom font-Rubik text-text_colour">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          <div className="px-3 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
            <p >{buttonText}</p>
          </div>
        </label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 h-80 min-w-full bg-white ">
          <p >Health Tracked {Date}</p>

          <div className=" mt-5 card w-76 bg-slate-100">
            <div className="card-body flex items-center justify-center font-Rubik">
              <p> </p>
              <p> </p>
              <p> </p>
              <p> </p>
              <p>No health tracked yet</p>
              <p> </p>
              <p> </p>
              <p> </p>
              <p> </p>

            </div>
          </div>
          <Link to="/Tracking">
          <button type="button" className="text-white bg-aqua_blue font-Rubik rounded-full text-sm px-40 py-2.5 text-center me-2 mb-2 mt-5">Track</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default DrawerComponent;
