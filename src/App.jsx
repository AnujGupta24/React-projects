import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Resume = lazy(() => import('./pages/Resume.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
	return (
		<Suspense
			fallback={<div className="text-center text-white">Loading...</div>}
		>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Suspense>
	);
}

export default App;
