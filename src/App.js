import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import './App.css';

function App(){
    return (
        <div className="App">
        <Navbar />
        <Intro />
        <About />
        {/* <Skills /> */}
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
        </div>
    );
}

export default App;