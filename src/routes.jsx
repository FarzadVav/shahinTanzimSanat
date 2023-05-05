import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import Blogs from "./pages/Blogs/Blogs"
import SingleBlog from "./pages/SingleBlog/SingleBlog"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/single-blog', element: <SingleBlog /> },
]

export default routes