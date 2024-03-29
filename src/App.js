import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderComponent from "./components/Header/HeaderComponent";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderComponent />
        <Navbar state={props.store.getState().messagesPage} />
        <div className="app-wrapper-content">
          <Routes>
            //userId? - значит, что это необязательный параметр
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route
              exact={false}
              path="/dialogs/*"
              element={<DialogsContainer />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
