import NavBar from "./components/NavBar";
import HomePage from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import PortSection from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  return (
   <div>
    <NavBar />
    <HomePage />
    <SocialLinks />
    <About />
    <PortSection />
    <Experience />
    <Contact />
   </div>
  );
}

export default App;
