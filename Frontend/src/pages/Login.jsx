import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
	<div className='max-w-[600px] mx-auto my-20 p-4 '>
		<form >
			<h2 className='text-2xl text-white mb-3'>Welcome back!</h2>
			<p className='text-gray-400 mb-10'>Don't have an account? <Link to='/signup' className='text-red-400'>Sign up.</Link></p>
			<input className='mb-2 text-white px-4 py-2 w-full rounded-md bg-gray-700' type="email" name='usermail' placeholder='Email address' required />
			<input className='mb-4 text-white px-4 py-2 w-full rounded-md bg-gray-700' type="password" name='userpass' placeholder='Password' required />
			<div className='text-white space-x-3 flex items-center mb-5'>
			<input  type='checkbox' name='remember-me' /> 
			<label className='text-white' htmlFor='remember-me'>Remember me</label>
			</div>
			<div className='mt-6'>
			<button type='submit' onClick={(e)=>{e.preventDefault()}} className='bg-red-400 w-full p-2 mx-auto rounded-lg'>Log in</button>
			</div>
	  
		</form>
	</div>
  )
}

export default Login
