import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import StyledApp from './App.styled';
import Nav from './components/navigation/Nav';
import About from './pages/about/About';
import Home from './pages/home/Home';

const App: FC = () => {
  return (
    <StyledApp>
      <Nav />
      {
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          {/* <Route path='contact' element={<Contact />} /> */}
          {/* <Route path='projects' element={<Projects />} /> */}
        </Routes>
      }
    </StyledApp>
  );
};

export default App;
