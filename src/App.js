import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
