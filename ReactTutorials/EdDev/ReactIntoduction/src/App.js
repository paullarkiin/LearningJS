import React from "react";
import Hello from "./sayHello";

// this is a app component in react 
function App() {
  // LOGIC go before the return inside a component

  // const sayHello = () => {
  //   console.log("hello");
  // };

//render a component that been broken in to it own file like a module.
  return (
    <div>
      <h1>This is the App component</h1>  
      <Hello />
    </div> 
  );

  // return ( // JSX
  //   <div>
  //     <h1>Hello React</h1>
  //     <button onClick={sayHello}>Hello</button>
  //   </div>
  // );
}

// behind the scene is more like React.createElement(div) is called and converted to HTML from JS.


//export app so it's read and past to index.js
export default App;