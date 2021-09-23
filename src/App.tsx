import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <AppRouter />
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
