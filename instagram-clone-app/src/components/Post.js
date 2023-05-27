import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div>
        <img className="post-img" src={props.post.imageUrl}></img>
      </div>
      <div className="post-buttons">
        <button
          onClick={() => {
            props.likeHandler(props.post.id);
          }}
        >
          Like
        </button>
        <button
          onClick={() => {
            console.log("comment");
          }}
        >
          Comment
        </button>
        <button
          onClick={() => {
            console.log("share");
          }}
        >
          Share
        </button>
      </div>
      <div>
        <p className="post-likes">{props.post.likes.length}</p>
        <p className="post-description">
          <span className="username">{props.post.username}</span>{" "}
          <span>{props.post.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
