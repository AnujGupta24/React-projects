import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
			<h1 className="text-8xl font-bold text-red-500">404</h1>
			<h2 className="text-3xl font-semibold mt-4">
				Oops! Page Not Found
			</h2>
			<p className="text-gray-400 mt-2">
				The page youre looking for doesnt exist.
			</p>

			{/* Fun SVG Illustration */}
			<img
				src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
				alt="Not Found"
				className="w-60 mt-6"
			/>

			{/* Go Back Button */}
			<Link
				to="/"
				className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg transition duration-300"
			>
				Go Back Home
			</Link>
		</div>
	);
};

export default NotFound;
