import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { useLocation, useParams } from "react-router-dom";
import styles from './PostPage.module.css'

const PostPage = () => {
	// const { title } = useParams();
	// console.log(title);

	const {state: { post }} = useLocation();
	console.log(post);

	return (
		<MainTemplate>
			<h1>
				#{post.id} {post.title}
			</h1>
			<h3>{post.author}</h3>

			<div className={styles.content} dangerouslySetInnerHTML={{__html:post.content}}/>
		</MainTemplate>
	);
};

export default PostPage;
