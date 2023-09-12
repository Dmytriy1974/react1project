import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.messagesPage}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element=
            {<Profile state={props.state.profilePage} addPosts={props.addPosts} updatePostChange={props.updatePostChange} />} />
            <Route exact={false} path="/dialogs/*" element=
            {<Dialogs state={props.state.messagesPage} 
                      addMessagesData={props.addMessagesData} 
                      updateMsgChange={props.updateMsgChange} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
