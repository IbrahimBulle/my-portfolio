import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollUp from "./Components/Scroll/ScrollUp";
import Qualification from "./Components/Qualifications/Qualification";
import Work from "./Components/Work/Work";
import Certificates from "./Components/Certificates/Certificates";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
