import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing.js';
import { AuthProvider } from "./contexts/AuthContext.js";  // ✅ Corrected path
import VideoMeetComponent from './pages/VideoMeet.js';
import HomeComponent from './pages/home.js';
import History from './pages/history.js';
import Authentication from "./pages/Authentication.js";  // ✅ Fixed path

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
