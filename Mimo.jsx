import {Link} from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";
export default function Client(){
    return(
         <>
          
            <Link to="/"><HiHomeModern size={30} /></Link>
             <div className="headline"> </div>
             <h3>Drawing of <br/> <em>Earthrise</em></h3>
             <section className="moses">
                <img className="earthrise" src="https://mimo.app/i/cat.png"/>
                <img  className="earthrise" src="https://mimo.app/i/dog.png"/> 
                <img  className="earthrise" src="https://mimo.app/i/lion.png"/>  
                <img  className="earthfall earthrise" src="https://mimo.app/i/tiger.png"/> 
             </section>
           
        </>
   )

}