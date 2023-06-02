// import "./App.css";
// import Post from "./components/Post";
// import mydata from "./data.json";
// import React, { useState } from "react";

// function App() {
//   const myUsername = "mmuminovic";
//   const [data, setData] = useState(mydata);
  
 

//   const likeHandler = (postId) => {
//     const newData = data.map((item, index) => {
//       if (item.id === postId) {
//         let likes = item.likes;
//         if (likes.includes(myUsername)) {
//           likes.filter((u) => u !== myUsername);
//         } else {
//           likes.push(myUsername);
//         }
//         item.likes = likes;
//       }
//       return item;
//     });
//     setData(newData);
//   };

//   return (
//     <div className="App">
//       <div className="posts">
//         {data.map((post) => {
//           return (
//             <Post
//               key={post.id}
//               post={post}
//               setData={setData}
//               myUserName={myUsername}
//               likeHandler={likeHandler}
//               userName={myUsername}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;