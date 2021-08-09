import React from "react";
import  Layout from '../components/Layout'
import  Intro from "../components/Intro";
import  Skills from "../components/Skills";
import  Project  from "../components/Project";
import Contact from "../components/Contact";


const Home = () => (
	<Layout>
		<Intro />
		<Project />
		<Skills />
		<Contact></Contact>
	</Layout>
);

export default Home;
