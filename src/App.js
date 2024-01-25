import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router/Router";
import {AuthProvider} from './context/AuthContext'
import Loginpage from "./Pages/Loginpage";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Loginpage/> */}
        <Router/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
