import { Footer } from './Component/Fragment/Footer';
import { Navbar } from './Component/Fragment/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Component/Pages/Home';

function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}> </Route>
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
