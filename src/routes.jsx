import Home from "./pages/Home/Home"
import Gallery from "./pages/Gallery/Gallery"
import Blogs from "./pages/Blogs/Blogs"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/blogs', element: <Blogs /> },
]

export default routes