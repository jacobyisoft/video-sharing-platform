import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavbarContainer from "./navbar/navbar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/video_show_container";
import Sidebar from "./sidebar/sidebar";
import ChannelContainer from "./user/channel_container";
import ResultsContainer from "./results/results_container";
import TrendingResultsContainer from "./library/trending_results_container";
import { AuthRoute, ProtectedRoute } from "../util/auth_route";

const App = (props) => (
  <div className="app-container">
    <NavbarContainer />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div className="home-page-container">
            <Sidebar />
            <VideoIndexContainer />
          </div>
        )}
      />
      <Route
        path="/results"
        render={() => (
          <div className="result-page-container">
            <Sidebar />
            <ResultsContainer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/channel/:userId"
        render={() => (
          <div className="channel-page-container">
            <Sidebar />
            <ChannelContainer />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/trending"
        render={() => (
          <div className="trending-page-container">
            <Sidebar />
            <TrendingResultsContainer />
          </div>
        )}
      ></Route>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route exact path="/videos/:videoId" component={VideoShowContainer} />
    </Switch>
  </div>
);

export default App;
