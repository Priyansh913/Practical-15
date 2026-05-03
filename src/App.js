import './App.css';
import Get from './Component/Get';
import Post from './Component/Post';
import Welcome from './Component/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/fetchdata" element={<Get />} />
          <Route path="/submit" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
