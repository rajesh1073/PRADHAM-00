import LoginPage from './Mainpage/Login/LoginPage';
import RegistrationPage from './Mainpage/Register/RegistrationPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/reg" element={<RegistrationPage/>} />
    </Routes>
    </BrowserRouter>
    </>
 
  );
}

export default App;
