import React from "react";
import { useNavigate } from "react-router-dom";
import windowWhite from "../assets/images/window-white.svg";
import goBack from "../assets/images/left-arrow-white.svg";
import goHome from "../assets/images/home-black.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};
	const handleGoHome = () => {
		navigate("/");
	};
	return (
		<div className="my-[50px] max-w-[600px] mx-auto">
			<div className="px-5">
				<img
					src={windowWhite}
					alt="window icon for notfound page"
					className="p-2 mb-4"
				/>
			</div>
			<div className="mb-[30px] space-y-3 px-5 ">
				<h1 className="text-2xl font-semibold text-white">
					Opps! page not found.
				</h1>
				<p className="text-gray-400">
					The page you are looking for doesn't exist or might've been removed.
				</p>
			</div>
			<div className="space-y-5 px-5">
				<button
					className="flex items-center gap-2 text-white rounded-md py-2 px-2 bg-gray-700"
					onClick={handleGoBack}
				>
					<img src={goBack} alt="go back icon" />
					Go back
				</button>
				<button
					className="flex items-center gap-2 text-black rounded-md py-2 px-2 bg-red-400"
					onClick={handleGoHome}
				>
					<img src={goHome} alt="home icon" />
					Jump to the home page
				</button>
			</div>
		</div>
	);
};

export default NotFound;
