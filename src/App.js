
// modules
import SmoothScroll from "smooth-scroll";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import { Navigation } from "./components/navigation";
import { Footer } from './components/footer';
import { Home } from './components/home';
import { Obituaries } from './components/obituaries';
import { Pricing } from './components/pricing';
import { Contact } from "./components/contact";
import { Signup } from './components/signup';
import './index.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/obituaries' element={<Obituaries />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
