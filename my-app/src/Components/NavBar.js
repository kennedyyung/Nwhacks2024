import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (


        <div class="fixed z-50 w-full h-20 max-w-lg -translate-x-1/2 bg-medium_purple rounded-full bottom-4 left-1/2 ">
            <div class="grid h-full max-w-lg grid-cols-3 mx-auto ">

                <Link to="/Analysis">
                    <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5  rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group h-50">
                        <img
                            src="/Analysis.png"
                        />
                    </button>
                </Link>


                <Link to="/">
                    <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group h-50">
                        <img
                            src="/Track.png"
                        />
                    </button>
                </Link>


                <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 h-50" >
                    <img
                        src="/Profile.png"
                        className="h-75 w-55"

                    />
                </button>

            </div>
        </div>

    );
}

export default NavBar;