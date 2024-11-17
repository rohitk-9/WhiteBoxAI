import Ai2 from "./Ai2";
import './componentStyle/SidebarStyle.css'

import React, { useState, useEffect } from 'react';

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event: any) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleOutsideClick = (event: any) => {
    const sidebar = document.querySelector('.sidebar');
    if (event.target !== sidebar && !sidebar?.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div
        className="fixed top-0 left-0 h-screen text-gray-200 w-1/2 transition-all duration-500 ease-in-out z-50 sidebar"
        style={{
          transform: isExpanded ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 500ms ease-in-out',
        }}
        onClick={(event: any) => event.stopPropagation()}
      >
        <button
          className={`z-50 transition duration-300 ${isExpanded ? 'absolute top-0 right-0' : 'absolute top-0 left-full'} SidebarBtn`}
          onClick={handleToggle}
        >
          {isExpanded ? 'X' : 'White Box AI'}
        </button>
        <Ai2 />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;







// import React, { useState, useEffect } from 'react';

// const Sidebar = ({ children }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = (event: any) => {
//     event.stopPropagation();
//     setIsExpanded(!isExpanded);
//   };

//   const handleOutsideClick = (event: any) => {
//     const sidebar = document.querySelector('.sidebar');
//     if (event.target !== sidebar && !sidebar?.contains(event.target)) {
//       setIsExpanded(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div>
//       <button
//         className="fixed top-0 left-0  hover:bg-green-800 transition duration-300 z-50 SidebarBtn"
//         onClick={handleToggle}
//       >
//         {isExpanded ? 'Collapse' : 'AI'}
//       </button>
//       <div
//         className="fixed top-0 left-0 h-screen bg-red-600 text-gray-200 w-1/2 transition-all duration-500 ease-in-out z-50 sidebar"
//         style={{
//           transform: isExpanded ? 'translateX(0)' : 'translateX(-100%)',
//           transition: 'transform 500ms ease-in-out',
//         }}
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         onClick={(event: any) => event.stopPropagation()}
//       >
//         {children}
//         <Ai2 />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useState } from 'react';

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen bg-red-600 text-gray-200 transition-all duration-300 ${
//         isExpanded ? 'w-1/2' : 'w-16'
//       }`}
//     >
//       <button
//         className={`p-4 bg-red-700 hover:bg-red-800 transition duration-300 ${
//           isExpanded ? 'absolute top-0 right-0' : ''
//         }`}
//         onClick={handleToggle}
//       >
//         {isExpanded ? 'Collapse' : 'Expand'}
//       </button>
//       <div className="p-4">
//         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//       </div>
//       {isExpanded && (
//         <ul className="p-4 mt-12">
//           <li className="p-2 hover:bg-red-700">Menu Item 1</li>
//           <li className="p-2 hover:bg-red-700">Menu Item 2</li>
//           <li className="p-2 hover:bg-red-700">Menu Item 3</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Sidebar;




















// import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import { Button } from 'primereact/button';
// import Ai2 from "./Ai2";
// import './componentStyle/SidebarStyle.css';


// export default function SizeDemo() {
//     const [visible, setVisible] = useState(false);

//     return (
//         <div className="card flex justify-content-center">
//             <Sidebar visible={visible} onHide={() => setVisible(false)} className="AiSidebar md:w-20rem lg:w-30rem">
//                 <h2>Sidebar</h2>
//                 <p>
//                     <Ai2/>
//                 </p>
//             </Sidebar>
//             <Button icon="pi pi-arrow-right aibtn" onClick={() => setVisible(true)}> AI   </Button>
//         </div>
//     )
// }
        