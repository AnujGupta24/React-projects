export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-saddlebrown-950 text-white text-center p-4 mt-auto">
			© {new Date().getFullYear()} My Portfolio | Built with React &
			Tailwind
		</footer>
	);
}
