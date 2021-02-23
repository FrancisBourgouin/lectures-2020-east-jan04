import logo from './logo.svg';
import Footer from './components/Footer'
import './App.css';
import { useState } from 'react';
import User from './hooks/userContext'

function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
    // axios.delete('/api/logout')
  }
  return (
    <div className="App">
      <User.Provider value={{ user, setUser }}>
        <Footer />
      </User.Provider>
    </div>
  );
}

export default App;
