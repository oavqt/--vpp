import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Routes> */}
    </BrowserRouter>
  );
};

export default App;
