import { useState } from "react"

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
    chooseOne: "",
    keduIfeIchoro: ""

  })
     const handleSubmit = () => {
        console.log(formData)
     }

    return(
        <section>
        <form className="formRunner">
        <label className="joinLabel"> First Name<input  name="firstName" className="inputPlanner" onChange={(e) => setFormData({...formData, firstName:e.target.value})}  placeholder="First Name" type="text" value={formData.firstName} /></label>
        <label className="joinLabel"> Phone Number<input name="phoneNumber" className="inputPlanner" onChange={(e) => setFormData({...formData, phoneNumber:e.target.value})}    placeholder="Phone Number" type="number"/></label>
        <label className="joinLabel"> Email <input name="email" className="inputPlanner" placeholder="Email" onChange={(e) => setFormData({...formData, email:e.target.value})}   type="email"/></label>
        <label className="joinLabel"> Technology <input name="chooseOne" value={formData.chooseOne}  type="radio" onChange={(e) => setFormData({...formData, chooseOne:e.target.value})}  /></label>
        <label className="joinLabel"> Communication <input name="chooseOne" value={formData.chooseOne}  type="radio" onChange={(e) => setFormData({...formData, chooseOne:e.target.value})}  /></label>
        <label className="joinLabel"> Modernization <input name="chooseOne" value={formData.chooseOne}  type="radio" onChange={(e) => setFormData({...formData, chooseOne:e.target.value})}  /></label>
        <label className="joinLabel"> Do you want to come back <input name="keduIfeIchoro" value={formData.keduIfeIchoro} onChange={(e) => setFormData({...formData, keduIfeIchoro:e.target.value})}   type="checkbox"/></label>
        <label className="joinLabel"> Places I want to be
            <select>
            <option>Nowhere</option>
            <option>Carlifornia</option>
            <option>Mexico</option>
            <option>New York</option>
            <option>Canada</option>
            </select></label>
      <label><input type="button" onClick={handleSubmit} /></label>
        </form>
        <section>
            <h3>{formData.firstName}</h3>
            <h3>{formData.phoneNumber}</h3>
            <h3>{formData.email}</h3>
        </section>
        </section>
    )
}