import React, { useState } from 'react'

const Form = () => {

    const initialFormState = {
        name: "",
        email:  "",
        password: "",
    }
    const [formData, setFormData] = useState(initialFormState);
    
  return (
    <form>
        <label>Name</label>
        <input 
            type="text" 
            value={formData.name} 
            onChange={(e)=>setFormData({...initialFormState, name: e.target.value})}/>
        <br/>
        <label>Email</label>
        <input 
            type="email" 
            value={formData.email} 
            onChange={(e)=>setFormData({...initialFormState, email: e.target.value})}/>
        <br/>
        <label>Password</label>
        <input 
            type="password" 
            value={formData.password} 
            onChange={(e)=>setFormData({...initialFormState, password: e.target.value})}/>
        <br/>
        <button type="submit">Submit</button>
        <p>{JSON.stringify(formData)}</p>
    </form>
  )
}

export default Form