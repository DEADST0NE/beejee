import { Route, Routes } from 'react-router-dom';

import { Main } from './views/Main';
import { Login } from './views/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
