import { people, randomStrings, randomNumbers } from "./Utils/warehouse.js";
import { useState } from "react";

function About() {
  const [search, setSearch] = useState({ searchUser: "" });
 
  // Find person based on current search string
  const person = people.find(p =>{
  return p.name.toLowerCase() === search.searchUser.toLowerCase()
  } );

  const concat = randomStrings.concat(randomNumbers);
  const showCon = concat.map((con, index) => <h4 key={index}>{con}</h4>);
  
  const reversal = [...randomStrings].reverse();
  const reversal2 = [...randomNumbers].reverse();
  //console.log(reversal);
  //console.log(reversal2);

  const newOne = new Array(10).fill("Samuel");
  const newOne2 = newOne.map((name, index) => `${name} ${index}`);
//console.log(newOne2);
 // console.log(newOne);

  return (
    <div>
      <h1 className="headline">About Page</h1>

      <input
        type="search"
        onChange={(e) => setSearch({ ...search, searchUser: e.target.value })}
        value={search.searchUser}
        name="searchUser"
      />
      <button type="submit">Search</button>

      {person ? (
        <>
          <h2>The Wizard of Orc has chosen the Prince {person.name}.</h2>
          <h3>Age: {person.age}</h3>
          <h3 className="city">City: {person.city}</h3>
          <ul className="hobbyList">
         {person.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
         </ul>
        </>
      ) : (
        <h2>No match found</h2>
      )}

      {showCon}
    </div>
  );
}

export default About;
