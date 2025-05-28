import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import FAQ from "../pages/FAQ"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

import { Routes, Route} from "react-router-dom"

const Router = () => {
  return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/home" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/faq" element={<FAQ />} />
		<Route path="/login" element={<Login />} />
		<Route path="/signup" element={<Signup />} />
	</Routes>
  )
}

export default Router
