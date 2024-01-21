

// import React from 'react';

// const DrawerComponent = () => {
//   return (
//     <div className="drawer drawer-bottom">
//       <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content">
//         {/* Page content here */}
//         <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
//       </div> 
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//         <ul className="menu p-4 h-80 min-w-full bg-base-200 text-base-content">
//           {/* Sidebar content here */}
//           <li><a>Sidebar Item 1</a></li>
//           <li><a>Sidebar Item 2</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default DrawerComponent;



// DrawerComponent.js

// import React from 'react';

// const DrawerComponent = () => {
//   return (
//     <div className="drawer drawer-bottom">
//       <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content">
//         {/* Page content here */}
//         <label htmlFor="my-drawer-4" className="drawer-button">
//           <div className="px-3 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
//             <p className="text-base text-gray-500 font-medium">1</p>
//           </div>
//         </label>
//       </div> 
//       <div className="drawer-side">
//         <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//         <ul className="menu p-4 h-80 min-w-full bg-base-200 text-base-content">
//           {/* Sidebar content here */}
//           <li><a>Sidebar Item 1</a></li>
//           <li><a>Sidebar Item 2</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default DrawerComponent;



// DrawerComponent.js

import React from 'react';

const DrawerComponent = ({ buttonText }) => {
  return (
    <div className="drawer drawer-bottom">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <div className="px-3 py-3 cursor-pointer flex w-full justify-center bg-light_purple rounded-lg">
            <p className="text-base text-gray-500 font-medium">{buttonText}</p>
          </div>
        </label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 h-80 min-w-full bg-white text-base-content">
          {/* Sidebar content here */}
          <p >Health Tracked {Date}</p>

          <div className=" mt-10 card w-76 bg-slate-100">
            <div className="card-body flex items-center justify-center">
              <p>No health tracked yet</p>
            <div className="card-actions justify-end">
          </div>
  </div>
</div>
        </ul>
      </div>
    </div>
  );
}

export default DrawerComponent;
