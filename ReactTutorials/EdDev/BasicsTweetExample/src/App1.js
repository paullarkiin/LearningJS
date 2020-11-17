import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

// whatever you have in your state, will update your html.
// so you dont have to use fix values.

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  //!Red is toggle apply the opposite of the bool statement.
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  
  // // an user  objects exmaple for state.
  // const[user, setUser] = useState({
  //   name: 'Paul',
  //   age: 25,
  //   posts:['my first post', 'my lovely summer']
  // });

// h1 tage argument {? and :} work like an if else statement 
  return (
   <div className="app">
     <h1 className={isRed ? "red" : ""}>Change my colour!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
   </div>
  );
}

export default App;


/* <Tweet name="Dev Ed" message="This is a random tweet" likes="Likes: 300" />
     <Tweet name="Fireworks" message="Boom Boom yal" likes="Likes: 4"/>
     <Tweet name="Traversy Media" message="Over 1 million dudes" likes="Likes: 5k"/>  */