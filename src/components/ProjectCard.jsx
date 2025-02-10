export default function ProjectCard({ project }) {
	return (
		<div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col h-full">
			{/* Image */}
			<img
				src={project.image}
				alt={project.title}
				loading="lazy"
				className="max-w-30 max-h-30 object-cover rounded-lg"
			/>

			{/* Content */}
			<div className="flex-grow mt-4">
				<h3 className="text-lg font-semibold">{project.title}</h3>

				<p className="text-gray-400 text-sm line-clamp-3">
					{project.description}
				</p>
			</div>

			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-4 text-blue-500 hover:underline rounded-md"
			>
				View Project
			</a>
		</div>
	);
}
