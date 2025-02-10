import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-900 border-b border-saddlebrown-950 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/">
					<h1 className="text-2xl font-bold">My Portfolio</h1>
				</Link>

				{/* Hamburger Menu (Visible on Small Screens) */}
				<button
					className="md:hidden text-white focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-6">
					{['Home', 'Projects', 'Skills', 'Resume', 'Contact'].map(
						(item) => (
							<li key={item}>
								<Link
									to={
										item === 'Home'
											? '/'
											: `/${item.toLowerCase()}`
									}
									className="hover:text-blue-400 transition"
								>
									{item}
								</Link>
							</li>
						)
					)}
				</ul>
			</div>

			{/* Mobile Menu (Visible when toggled) */}
			{isOpen && (
				<ul className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-800 p-4 rounded-lg">
					{['Home', 'Projects', 'Skills', 'Resume', 'Contact'].map(
						(item) => (
							<li key={item} onClick={() => setIsOpen(false)}>
								<Link
									to={
										item === 'Home'
											? '/'
											: `/${item.toLowerCase()}`
									}
									className="hover:text-blue-400 text-lg"
								>
									{item}
								</Link>
							</li>
						)
					)}
				</ul>
			)}
		</nav>
	);
}
