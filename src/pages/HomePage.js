import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { posts } from "../fakeDb";
import Post from "../components/Post";
import styles from './HomePage.module.css'


const HomePage = () => {
	
	return (
		<MainTemplate>
			<div>
				<h1>Homepage</h1>

				<h2>New posts</h2>
				<div className={styles.wrapper}> 
					{posts.map((post) => (
				        <Post post={post}/>
					))}
				</div>
			</div>
		</MainTemplate>
	);
};

export default HomePage;
