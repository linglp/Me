import './App.scss';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Pagetracking from './Googleanalytics'

ReactGA.initialize("G-KFLPE2N3KE");
ReactGA.send("pageview");

function App() {
  Pagetracking();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="aboutMe" element={<About />} />
      <Route path="contactMe" element={<Contact />} />
      <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
