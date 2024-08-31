import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Layout/Navbar";
import Pages from "./components/Pages";
import Service from "./components/Service";
import Contacts from "./pages/homeLayout/Contacts";
import LookingForProfessional from "./pages/homeLayout/LookingForProfessional";
import Map from "./pages/homeLayout/Map";
import Questions from "./pages/homeLayout/Questions";
import Specialists from "./pages/homeLayout/Specialists";
import Testimonials from "./pages/homeLayout/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Pages />
      <Service />
      <Questions />
      <Specialists />
      <Testimonials />
      <LookingForProfessional />
      <Map />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
