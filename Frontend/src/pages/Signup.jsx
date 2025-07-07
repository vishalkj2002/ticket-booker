import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		userType: "",
	});

	return (
		<div className="flex items-center justify-center">
			<div className="flex-col">
				<h1 className="text-white text-4xl font-bold">Create an account</h1>
				<p className="text-dark-text-secondary pt-5">
					Already have one? <span className="text-dark-accent">Log in.</span>
				</p>
				<div>
					<form>
						<label className="text-dark-text-secondary">
							<input
								type="radio"
								name="userType"
								value="individual"
								checked={formData.userType === "individual"}
							/>
							Individual
						</label>
						<label className="text-dark-text-secondary">
							<input
								type="radio"
								name="userType"
								value="business"
								checked={formData.userType === "business"}
							/>
							Business
						</label>
						<input type="text" name="firstName" value={formData.firstName} />
						<input type="text" name="lastName" value={formData.lastName} />
						<input type="email" name="email" value={formData.email} />
						<input type="password" name="password" value={formData.password} />
						<input type="password" name="confirmPassword" />
						<label className="text-dark-text-secondary">
							<input type="checkbox" name="acceptTC" />I agree to the{" "}
							<span className="text-dark-accent">Terms of Use</span> & <span className="text-dark-accent">Privacy Policy</span>
						</label>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
