import ProjectCard from '../components/ProjectCard';

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: 'Online Food Ordering System',
			description: 'A full-stack application for ordering food online.',
			techStack: ['React', 'Spring Boot', 'MySQL'],
			image: './src/assets/react.svg',
			link: 'https://your-live-project-link.com',
		},
		{
			id: 2,
			title: 'Book Management App',
			description:
				'A CRUD application to manage books with authentication.',
			techStack: ['React', 'Spring Boot', 'MySQL'],
			image: './src/assets/react.svg',
			link: 'https://your-live-project-link.com',
		},
		{
			id: 3,
			title: 'Tours and Travels',
			description: 'A small application for booking tours and travels.',
			techStack: ['React', 'Tailwind CSS'],
			image: './src/assets/react.svg',
			link: 'https://your-live-project-link.com',
		},
	];
	return (
		<div className="min-h-screen bg-gray-900 text-white py-4">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold mb-4">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{projects.map((project) => (
						<div key={project.id} className="h-full">
							<ProjectCard project={project} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
