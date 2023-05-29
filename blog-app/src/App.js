import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blogs/>,
  },
  {
    path: "blogdetails",
    element: <BlogDetails/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
