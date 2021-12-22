import { Footer } from './Component/Fragment/Footer';
import { Navbar } from './Component/Fragment/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Component/Pages/Home';
import { About } from './Component/Pages/About';
import { Terms } from './Component/Pages/Terms';
import { ScrollToTop } from './Component/Fragment/ScrollToTop';
import { Privacy } from './Component/Pages/Privacy';

function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}> </Route>
        <Route path="/about" element={ <About />}> </Route>
        <Route path="/privacy-policy" element={ <Privacy />}> </Route>
        <Route path="/terms-and-condition" element={ <Terms />}> </Route>
      </Routes>
    <Footer />
    <ScrollToTop />
    </Router>
  );
}

export default App;
