// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ColourPicker from './components/ColourPicker';
import './App.css';


const App = () => {
  const colors = [
    "Red",            
    "Chartreuse",    
    "Blue",           
    "Yellow",    
    "Magenta",        
    "Aqua",     
    "Orange",     
    "DarkMagenta",         
    "Pink",          
    "ForestGreen",
    "Salmon",         
    "MediumTurquoise",
    "Brown",         
    "DarkOrange",    
    "SteelBlue",    
    "Yellow",         
];

  return (
   <div className="app-container">
      <h1>Color Picker</h1>
      <ColourPicker Colours={colors} />
    </div>
  );
};

export default App;
