import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Message sent successfully! 🚀');
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
			<h2 className="text-4xl font-bold mb-6">Contact Me</h2>

			<form
				onSubmit={handleSubmit}
				className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
			>
				<div className="mb-4">
					<label className="block text-gray-400 mb-1">Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-400 mb-1">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-400 mb-1">Message</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						rows="4"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
				>
					Send Message 🚀
				</button>
			</form>

			{/* Social Media Links with Icons */}
			<div className="mt-6 flex space-x-6 text-2xl ">
				<a
					href="https://github.com/AnujGupta24"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-400 transition hover:scale-110"
				>
					<FaGithub />
				</a>
				<a
					href="https://linkedin.com/in/anuj-gupta10"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-400 transition hover:scale-110"
				>
					<FaLinkedin />
				</a>
				<a
					href="mailto:anujgupta4594@email.com"
					className="hover:text-red-400 transition hover:scale-110"
				>
					<FaEnvelope />
				</a>
			</div>
		</div>
	);
};

export default Contact;
