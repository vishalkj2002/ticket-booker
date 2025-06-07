import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    alert('Login submitted!');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-900 px-4'>
      <form onSubmit={handleSubmit} className='w-full max-w-md space-y-5 text-white'>
        <h2 className='text-2xl font-bold'>Welcome back!</h2>
        <p className='text-sm text-gray-400'>
          Don’t have an account? <Link to="/signup" className='text-red-400 hover:underline'>Sign up.</Link>
        </p>

        {/* Email input */}
        <input
          className='px-4 py-2 w-full rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none'
          type="email"
          name='email'
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password with toggle */}
        <div className='relative'>
          <input
            className='px-4 py-2 w-full rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none pr-10 '
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer select-none'
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {/* Remember me */}
        <label className='flex items-center text-sm space-x-2 mt-1'>
          <input
            type='checkbox'
            name='remember'
            checked={formData.remember}
            onChange={handleChange}
            className='accent-red-500'
          />
          <span>Remember me</span>
        </label>

        {/* Login button */}
        <button
          type='submit'
          className='w-full py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition'
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
