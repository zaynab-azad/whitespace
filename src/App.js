import "./App.css";
import Contact from "./components/contact/Contact";
import Filtering from "./components/filtering/Filtering";
import Footer from "./components/footer/Footer";

import Navbar from "./components/Nabar/Navbar.js";
import Service from "./components/service_slider/Service";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="body">
        <div className="slider">
          <Service />
        </div>
        <div className="filtering-main">
          <Filtering />
        </div>
        <div className="contact-main">
          <Contact />
        </div>
      </div>
      <div className="container footer-main">
        <Footer />
      </div>
    </div>
  );
}

export default App;
