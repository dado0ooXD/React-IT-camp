import React, {useState, useEffect} from "react";

const Post = (props) => {
  const isPostLikedByMe = props.post.likes.includes(props.userName);
  let likeButtonText = 'Like';
  if (isPostLikedByMe) {
    likeButtonText = "Liked"
  }

  const [showInput, setShowInput] = useState("none");
  const [inputVal, setInputVal] = useState('');
  const [arr, setArr] = useState({})

  // useEffect(() =>{setTimeout(() => { setInputComm("none")} ,5000)}, [inputComm]);
  const showCommentInput = () => {
    setShowInput("flex")
  }
  
  const addItemToArray = () => {
    setArr({username: "" , comm: inputVal, id: Math.floor(Math.random() * 1000)})
    props.post.comments.push(arr)
    console.log(props.post.comments);
    setInputVal("");
    console.log(arr.id)
  }

    console.log(props.post.comments.id)

  

  return (
    <div className="post" onClick={showCommentInput}>
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
          onClick={
            addItemToArray
        }
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
        <p className="post-likes">{props.post.likes.length} and others</p>
        <p className="post-description">
          <span className="username">{props.post.username}</span>{" "}
          <span>{props.post.description}</span>
        </p>
      </div>
      <input type="text" style={{display:showInput}} value={inputVal} onChange={(e) => setInputVal(e.target.value)}  placeholder="Leave your comment"/>
      {props.post.comments.map((item, index) => {
        return <div key={item.id}>
          <p key={item.id}> username: {item.username}</p>
          <p key={item.id}> comment: {item.comm }</p>
        </div>
      })}
    </div>
  );
};

export default Post;
