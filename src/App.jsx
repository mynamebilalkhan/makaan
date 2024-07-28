import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PropertyList from "./pages/PropertyList";
import PropertyType from "./pages/PropertyType";
import TestimonialsPage from "./pages/TestimonialsPage";
import PropertyAgent from "./pages/PropertyAgent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/property-list" element={<PropertyList />} />
      <Route path="/property-type" element={<PropertyType />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/property-agent" element={<PropertyAgent />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
