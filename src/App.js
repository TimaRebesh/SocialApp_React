import React from "react";
import "./App.css";
import Header from "./components/Toolbar/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/profile" render={() => <ProfileContainer />} />
          <Route path="/message" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
