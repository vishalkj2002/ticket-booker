import React from "react";
import logoWhite from "../assets/images/logo-white.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="mt-[30px]">
			<div className="mx-20">
				<div className="flex items-center">
					<div>
						<img
							src={logoWhite}
							alt="Ticket Booker Logo White"
							className="h-10 w-auto"
						/>
					</div>

					<nav className="flex-grow flex justify-center space-x-20 text-[20px] text-white">
						<Link to="/" className="hover:text-gray-300">
							Home
						</Link>
						<Link to="/about" className="hover:text-gray-300">
							About
						</Link>
						<Link to="/contact" className="hover:text-gray-300">
							Contact
						</Link>
						<Link to="/faq" className="hover:text-gray-300">
							FAQ
						</Link>
					</nav>

					<div className="ml-auto flex space-x-10 text-[20px] text-white">
						<Link to="/signup" className="hover:text-gray-300 px-4 py-2">
							Sign Up
						</Link>
						<Link
							to="/login"
							className="hover:text-gray-300 border border-white px-8 py-2 rounded-xl"
						>
							Log In
						</Link>
					</div>
				</div>

				<div className="mt-8 border-b-2 border-[#555555] border-opacity-50 w-full"></div>
			</div>
		</header>
	);
};

export default Header;
