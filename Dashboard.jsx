import SectionBreak from "./src/components/SectionBreak"
import ClientList from "./ClientList"
import FormPage from './src/components/FormPage'
import { Link } from 'react-router-dom';
import About from "./src/Achalugo"
import { IoImagesOutline} from "react-icons/io5"
import { IoBusinessSharp } from "react-icons/io5";

export default function Dashboard() {
    return (
       <section className="dashboard">
       <nav className="nav">
        <section className="header">
        <Link className="business" to="/client"><IoBusinessSharp size={35}/></Link>
        <div className="card">3D Card</div>
        <Link className="navigate" to="/clientmimo"><IoImagesOutline size={32}/></Link>
        <Link className="navigate" to="/tabular-form"> Table<IoImagesOutline size={32}/></Link>
        </section>
       </nav>

       
       <SectionBreak contact={"0907958313"}/>
       

       <About/>
       <ClientList/>
       <FormPage/>
       </section> 
    )
}