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
      <Route path="/others" element={<Others />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
