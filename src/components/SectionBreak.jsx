import {FiAnchor} from "react-icons/fi"

export default function SectionBreak({ contact }) {   
    return( 
        <>
            <div className="section-break"></div>
            <h1 className="headline"> Timothy<strong> loves </strong> to eat <em>ice cream</em> wetin I want use ice cream do? He said...</h1>
            <section className="section-break">
                <h1 className="headline"> Timothy<strong> loves </strong> to eat <em>ice cream</em> wetin I want use ice cream do? He said...</h1>
                <h3 className="headline" >Phone Number {contact}</h3>
                <input className="input-comms" type="email" placeholder="timothy@gmail.com"/>
                <FiAnchor size={64} color={'#a568ff'}/>
                <a href="https://cars.com"  target="_blank" rel="noopener noreferrer">Buy a car</a>
            </section>
            
        </>
    )
}