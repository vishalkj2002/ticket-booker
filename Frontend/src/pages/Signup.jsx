import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
	 const [isBusiness, setIsBusiness] = useState(false);
  const [agree, setAgree] = useState(false);
  return (
		<div className="min-h-screen flex items-center justify-center bg-zinc-900 p-6">
      <div className="w-full max-w-md bg-zinc-900 text-white space-y-5">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <p className="text-sm text-gray-400">
          Already have one?{" "}
          <Link to="/login" className="text-red-400 hover:underline">
            Log in.
          </Link>
        </p>

        {/* User Type Selection */}
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              checked={!isBusiness}
              onChange={() => setIsBusiness(false)}
              className="accent-red-400"
            />
            <span>Individual</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              checked={isBusiness}
              onChange={() => setIsBusiness(true)}
              className="accent-red-400"
            />
            <span>Business</span>
          </label>
        </div>

        {/* Name Fields */}
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="First name"
            className="w-1/2 px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-1/2 px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Password Fields */}
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 pr-10 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">👁️</span>
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 pr-10 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">👁️</span>
        </div>

        {/* Checkbox */}
        <label className="flex items-start space-x-2 text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="accent-red-500 mt-1"
          />
          <span>
            I agree to the{" "}
            <Link to="/terms" className="text-red-400 hover:underline">
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link to="/privacy" className="text-red-400 hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>

        {/* Submit Button */}
        <button
          className="w-full py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
          disabled={!agree}
        >
          Create account
        </button>
      </div>
    </div>
  )
}

export default Signup
