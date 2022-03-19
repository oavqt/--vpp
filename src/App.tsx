import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Home from './pages/home/Home';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      {
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='projects' element={<Projects />} /> */}
        </Routes>
      }
    </BrowserRouter>
  );
};

export default App;
