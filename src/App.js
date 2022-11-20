
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/not-found' element={<NotFound />}></Route>
          <Route exact path='/' element={<Home />} />
          {/* "page not found" handling below  */}
          <Route
            path="*"
            element={<Navigate to="/not-found" replace />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
