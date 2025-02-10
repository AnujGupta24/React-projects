const Resume = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-white py-10 px-6">
			<div className="container mx-auto max-w-4xl">
				{/* Title */}
				<h2 className="text-4xl font-bold text-center mb-8">
					My Resume
				</h2>

				{/* Download Button */}
				<div className="text-center mb-6">
					<a
						href="/resume.pdf"
						download="AnujGupta_Resume.pdf"
						className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg transition duration-300"
					>
						Download Resume 📄
					</a>
				</div>

				{/* Experience & Education */}
				<div className="grid md:grid-cols-2 gap-8">
					{/* Experience */}
					<div>
						<h3 className="text-2xl font-semibold mb-4 text-blue-400">
							Experience
						</h3>
						<div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
							<h4 className="text-lg font-bold">
								Frontend Developer
							</h4>
							<p className="text-gray-400">Fresher</p>
							<p className="text-gray-300 text-sm mt-2">
								Developing interactive UI components using React
								& Tailwind.
							</p>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg shadow-lg">
							<h4 className="text-lg font-bold">
								Intern - Web Developer
							</h4>
							<p className="text-gray-400">Yet to define</p>
							<p className="text-gray-300 text-sm mt-2">
								Working on a React-based projects and optimized
								web performance.
							</p>
						</div>
					</div>

					{/* Education */}
					<div>
						<h3 className="text-2xl font-semibold mb-4 text-blue-400">
							Education
						</h3>
						<div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
							<h4 className="text-lg font-bold">
								Bachelors in Computer Science (Bsc.Cs)
							</h4>
							<p className="text-gray-400">
								Mumbai University | 2019 - 2023
							</p>
							<p className="text-gray-300 text-sm mt-2">
								Intermediate in Computer Science & Web
								Development.
							</p>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
							<h4 className="text-lg font-bold">
								Basic Education (Ist - Xth)
							</h4>
							<p className="text-gray-400">
								NRC School | 2008 - 2018
							</p>
							<p className="text-gray-300 text-sm mt-2">
								Completed Basic Education in NRC School. Mohone
								gate Ambivali (E)
							</p>
						</div>
					</div>
				</div>

				<div>
					<h3 className="text-2xl font-semibold text-center text-blue-400">
						Apart from Curricular Activities
					</h3>
					<div className="text-center mb-4 text-white">
						I like to do the following activities
					</div>
					<div className="flex flex-wrap select-none justify-center gap-3">
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							Football
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							Chess
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							Cycling
						</span>
					</div>
				</div>

				{/* Skills Overview */}
				<div className="mt-8">
					<h3 className="text-2xl font-semibold text-center text-blue-400 mb-4">
						Key Skills
					</h3>
					<div className="flex flex-wrap select-none justify-center gap-3">
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							HTML
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							CSS
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							Tailwind CSS
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							JavaScript
						</span>
						<span className="bg-gray-800 px-4 py-2 rounded-lg text-sm">
							React.js
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
