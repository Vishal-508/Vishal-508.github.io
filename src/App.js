



import './App.css';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      
        <Home/>
    </div>
  );
}

export default App;


// import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
// import './index.css';
// import About from "./Components/About";
// import Contact from "./Components/Contact";

// const anchors = ["firstPage", "secondPage", "thirdPage"];

// const App = () => (
//   <ReactFullpage
//     anchors={anchors}
//     navigation
//     navigationTooltips={anchors}
//     navigat
//     sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
//     onLeave={(origin, destination, direction) => {
//       console.log("onLeave event", { origin, destination, direction });
//     }}
//     render={({ state, fullpageApi }) => {
//       console.log("render prop change", state, fullpageApi);

//       return (
//         <div>
//           <About/>
//           <Contact/>
//         </div>
//       );
//     }}
//   />
// );
// export default App;