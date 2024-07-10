import { Analytics } from "@vercel/analytics/react"

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogOhMyPosh from './assets/Blogs/BlogOhMyPosh/BlogOhMyPosh';
import BlogTypewriterEffect from './assets/Blogs/BlogTypewriterEffect/BlogTypewriterEffect';
import BlogLinearRegression from './assets/Blogs/BlogLinearRegression/BlogLinearRegression';

import Intro from './assets/Intro/Intro';
import About from './assets/About/About';
import Skills from './assets/Skills/Skills';
import Projects from './assets/Projects/Projects';
import Blogs from './assets/Blogs/Blogs';
import Connect from './assets/Connect/Connect';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/blogOhMyPosh" element={<BlogOhMyPosh/>} />
				<Route path="/blogTypewriterEffect" element={<BlogTypewriterEffect/>} />
				<Route path="/blogLinearRegression" element={<BlogLinearRegression/>} />
			</Routes>
			<Analytics />
		</Router>
	);
}

function Home() {

	window.onload = function () {
		window.scrollTo(0, 0);
	};

	return (
		<>

			{/* Navbar and Intro */}
			<Intro/>

			{/* About */}
			<About/>

			{/* Skills */}
			<Skills/>

			{/* Project */}
			<Projects/>

			{/* Blogs */}
			<Blogs/>

			{/* Connect */}
			<Connect/>

		</>
	)
}

export default App
