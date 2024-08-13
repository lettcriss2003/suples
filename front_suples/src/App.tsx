import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './table.css'
import Clientes from './Clientes';
import Automoviles from './Automoviles';

function App() {
  return (
    <Router>
      <div>
        <h1>Laboratorio 9</h1>
        <h2>Docker Compose app backend, frontend y BD mariaDB</h2>
        <div>
          <Link to="/clientes">
            <button style={{ marginRight: '2em' }}>Clientes</button>
          </Link>
          <Link to="/automoviles">
            <button>Automóviles</button>
          </Link>
        </div>
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/automoviles" element={<Automoviles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;