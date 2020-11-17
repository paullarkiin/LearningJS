import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: "Paul", message: "Hello there"},
    {name: "John", message: "I am john snow"},
    {name: "Traversy", message: "I am awesome"},
  ]);

  return (
   <div className="app">
     {users.map(user => (
       <Tweet name={user.name} message={user.message} />
     ))}
   </div>
  );
}

export default App;


/* <Tweet name="Dev Ed" message="This is a random tweet" likes="Likes: 300" />
     <Tweet name="Fireworks" message="Boom Boom yal" likes="Likes: 4"/>
     <Tweet name="Traversy Media" message="Over 1 million dudes" likes="Likes: 5k"/>  */