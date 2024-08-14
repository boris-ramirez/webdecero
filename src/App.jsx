
  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  import Profile from './views/Profile/Profile';
  import Login from './components/Login/Login';
  import { useAuth } from './hooks/useAuth';

  function App() {
  const {isAuthenticated} = useAuth()

    return (
      <Router>
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/profile" replace />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/profile" : "/login"} replace />} /> 

        </Routes>
      </Router>
    );
  }

  export default App;
