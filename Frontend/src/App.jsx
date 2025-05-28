// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import FAQ from "./pages/FAQ";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

// const Layout = () => {
// 	return (
// 		<>
// 			<Header />
// 			<Outlet />
// 		</>
// 	);
// };

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{ path: "/", element: <Home /> },
// 			{ path: "/about", element: <About /> },
// 			{ path: "/contact", element: <Contact /> },
// 			{ path: "/faq", element: <FAQ /> },
// 			{ path: "/signup", element: <Signup /> },
// 			{ path: "/login", element: <Login /> },
// 		],
// 	},
// ]);

// function App() {
// 	return (
// 		<>
// 			<RouterProvider router={router} />
// 		</>
// 	);
// }

// export default App;
import "./App.css";
import Layout from "./layout/Layout";

function App() {
	return <Layout />;
}

export default App;