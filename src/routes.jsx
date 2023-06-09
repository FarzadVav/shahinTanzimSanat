import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import Blogs from "./pages/Blogs/Blogs"
import SingleBlog from "./pages/SingleBlog/SingleBlog"
import Contact from "./pages/Contact/Contact"
import AboutUs from "./pages/AboutUs/AboutUs"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/single-blog', element: <SingleBlog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/about-us', element: <AboutUs /> }
]

export default routes