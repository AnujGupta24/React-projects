import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import {
	SiTailwindcss,
	SiJavascript,
	SiMysql,
	SiNodedotjs,
} from 'react-icons/si';

const Skills = () => {
	const skills = [
		{ name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
		{ name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
		{
			name: 'Tailwind CSS',
			icon: <SiTailwindcss className="text-blue-400" />,
		},
		{
			name: 'JavaScript',
			icon: <SiJavascript className="text-yellow-500" />,
		},
		{ name: 'React.js', icon: <FaReact className="text-blue-500" /> },
		{ name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
		{ name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
		{ name: 'Git & GitHub', icon: <FaGithub className="text-gray-400" /> },
	];

	return (
		<div className="min-h-screen bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4 items-center text-center">
				<h2 className="text-4xl font-bold mb-6">Skills</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="bg-gray-800 flex flex-col items-center p-4 rounded-lg shadow-md hover:bg-gray-700 hover:scale-110 cursor-pointer transition-all duration-300"
						>
							<span className="text-4xl">{skill.icon}</span>
							<p className="mt-2 text-lg font-semibold">
								{skill.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
