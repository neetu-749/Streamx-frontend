import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Upload from './components/Upload/Upload';
import SignIn from './components/Form/SignIn/SignIn';
import SignUp from './components/Form/SignUp/SignUp';
import SignOut from './components/SignOut/SignOut';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard/>} />
      <Route exact path="/video/:videoTitle" element={<VideoPlayer/>} />
      <Route exact path="/upload" element={<Upload/>} />
      <Route exact path="/signIn" element={<SignIn/>} />
      <Route exact path="/signUp" element={<SignUp/>} />
      <Route exact path="/signOut" element={<SignOut/>} />  
    </Routes>
    </BrowserRouter>
  );
}

export default App;