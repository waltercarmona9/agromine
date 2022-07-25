import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './styles/index.css';

//screens
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Employee from './pages/Employee';
import Feedbacks from './pages/Feedbacks';
import Camera from './pages/Cam'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Mapping from './pages/Mapping';
import Others from './pages/Others';
import Detect from './pages/Detect';
import Gallary from './pages/Gallary';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/home" element={<HomePage /> } />
      <Route path="/maps" element={<Mapping /> } />
      <Route path="/calendar" element={<Others />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/gallary" element={<Gallary />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
