import { people } from "./src/Utils/warehouse"
import { Link } from "react-router-dom"

export default function ClientList() {

    const population = people.map((person, index) => {
        return (
            <>
            
            <div className="container" key={index}>
                <h2 className="namer">{person.name}</h2>
                <img className="person" src={person.image}/>
                <h3>Age {person.age}</h3>
                <h3>City {person.city}</h3>
                <div className="hobbies">
                {person.hobbies.map((hobby, index) => <h4 key={index}>{hobby}</h4>)}
              </div>
            </div>
            </>
        )
    })
    return(
        <>
        <Link to="/">Back Home</Link>
        <h1 className="headline">Client List</h1>
         {population}
        
        </>
    )
}