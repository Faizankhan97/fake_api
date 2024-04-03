import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './component/Layout/Header/Header';
import Posts from './component/Pages/Posts/Posts';
import Comments from './component/Pages/Comments/Comments';
import Albums from './component/Pages/Albums/Albums';
import Photos from './component/Pages/Photos/Photos';
import Todos from './component/Pages/Todos/Todos';
import Users from './component/Pages/Users/Users';
import Home from "./component/Pages/Home/Home";
import Footer from './component/Layout/Footer/Footer';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
