import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";

function FormSubmitted() {
const navigate = useNavigate();
const location = useLocation();
const recievedEmail = location.state ? location.state.email : null;
const recievedUsername = location.state ? location.state.username : null;

const toggleToForm = () => {
 navigate("/")
}

  return (
    <div className='bg-white m-16 w-96 h-fit p-10 rounded-2xl'>
      <FaCheckCircle size={35} color='#ff6257'/>
      <h1 className='font-bold text-2xl py-4'>Thanks for subscribing {recievedUsername}!</h1>
      <p className='text-xs py-4'>Aconfirmation email has been sent to <span className='font-bold'>{recievedEmail}</span>. Please open it and click the button inside to confirm your subscription</p>
      <button onClick={toggleToForm} className='w-full bg-[#36384e] hover:bg-[#ff6257] h-10 text-white text-xs rounded'>Dismiss message</button>
    </div>
  )
}

export default FormSubmitted