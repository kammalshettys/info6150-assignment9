import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from '../app/pages/home/home'
import About from '../app/pages/aboutUs/aboutUs'
import Jobs from '../app/pages/jobs/jobs'
import Contact from '../app/pages/contact/contact'
import Login from '../app/pages/login/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [userName,setUserName] = useState(null);
  let appCallBack = (response)=>{
    setUserName(response.data.user.name);
  }
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path = "/about" element = {<About userName={userName}/>}></Route>
      <Route path = "/jobs" element = {<Jobs userName={userName}/>}></Route>
      <Route path = "/login" element = {<Login appCallBack={appCallBack}/>}></Route>
      <Route path = "/contact" element = {<Contact userName={userName}/>}></Route>
      <Route path = "/" element = {<Home userName={userName}/>}></Route>
    </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;
