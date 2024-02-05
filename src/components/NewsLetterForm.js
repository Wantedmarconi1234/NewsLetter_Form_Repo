import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewsLetterForm() {
const navigate = useNavigate();
const [formData, setFormData] = useState({username: '', email: ''})

const [formErrors, setFormErrors] = useState({username: '',email: ''})

const validation = () => {
  const newErrors = {...formErrors};
  let valid = true

  if (formData.username.trim().length < 6) {
    newErrors.username = 'minimum characters is 6!';
    valid = false
  }else {
    newErrors.username = '';
  }

  const emailRegExp =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegExp.test(formData.email)) {
    newErrors.email = 'valid email required!';
    valid = false;
  }else {
    newErrors.email = ''
  }

  setFormErrors(newErrors);
  return valid;
}

//this is the submit function
const handleSubmit = (e) => {
  e.preventDefault()
  const isValid = validation()
  if (isValid) {
    console.log('You have successfully submitted the forms!');
    return navigate('submitted', {state: {email: formData.email, username: formData.username}})
  }else {
    console.log('Failed to submit, Please check input info!');
  }
}

//changing the input data
const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData((prevElement) => ({
    ...prevElement,
            [name] : value,
  })) 
}



return (
  <div className=''>
    <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="username" className='cursor-pointer font-bold text-sm pt-5 text-[#242742]'>Username <span className='text-xs text-red-500 mx-[8%]'>{formErrors.username}</span></label>
        <input 
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          type="text" 
          required
          placeholder='username' 
          className={`${formErrors.username ? 'bg-red-200' : ''} border-solid border-2 h-12 border-[#9294a0] px-5 rounded my-5`}
        />
        <label htmlFor="email" className='cursor-pointer font-bold text-sm pt-5 text-[#242742]'>Email address <span className='text-xs text-red-500 mx-[8%]'>{formErrors.email}</span></label>
        <input 
          id='email'
          name='email'
          required
          value={formData.email}
          onChange={handleChange}
          type="email" 
          placeholder='email@comapany.com' 
          className={`${formErrors.email ? 'bg-red-200' : ''} border-solid border-2 h-12 border-[#9294a0] px-5 rounded my-5`}
        />
        <button  className='bg-[#242742] text-white text-sm font-bold h-12 rounded'>Subscribe to monthly newsletter</button>
    </form>
  </div>
)
}

export default NewsLetterForm