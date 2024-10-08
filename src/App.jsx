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
import PropertyTypeDetail from "./pages/PropertyTypeDetail";
import Listing from "./pages/Listing";
import PropertyDetail from "./pages/PropertyDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/type/:type" element={<PropertyTypeDetail />} />
      <Route path="/property-list" element={<PropertyList />} />
      <Route path="/property-type" element={<PropertyType />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/property-agent" element={<PropertyAgent />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/property/:id" element={<PropertyDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
