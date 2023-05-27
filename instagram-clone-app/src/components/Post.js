import React, {useState} from "react";

const Post = (props) => {
  const isPostLikedByMe = props.post.likes.includes(props.userName);
  let likeButtonText = 'Like';
  if (isPostLikedByMe) {
    likeButtonText = "Liked"
  }


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
          {likeButtonText}
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
