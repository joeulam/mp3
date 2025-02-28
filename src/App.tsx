import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Certifications from "./pages/Certifications";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";



function Root(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Certifications" element={<Certifications/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  )
}
const router = createBrowserRouter([{path:"*" , Component: Root}])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
