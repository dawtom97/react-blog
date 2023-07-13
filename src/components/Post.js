import React from "react";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const navigation = useNavigate();

  console.log(post);

  const handleNavigate = () => {
    navigation(`/blog/${post.slug}`, { state: { post:post } });
  };

  const shortDesc = post.short.length > 80 ? post.short.slice(0,80) + "..." : post.short

  return (
    <div className={styles.card}>
        <span className={styles.category}>{post.category}</span>
     
      <img className={styles.thumbnail} src={`https://picsum.photos/id/${post.postImg}/300/200`} alt=""/>
      <div className={styles.author}>
      <img src={`https://i.pravatar.cc/50?img=${post.authorImg}`} alt=""/>
      <span>Autor: {post.author}</span>
      </div>
    
      <h3>{post.title}</h3>
      <p>{shortDesc}</p>
      <button onClick={() => handleNavigate()}>
        Więcej
      </button>
    </div>
  );
};

export default Post;
