import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';
const welcomeButtonHandler = () => {};

const App = ({errorsCount, questions}) => {
  // const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} welcomeButtonClickHandler={welcomeButtonHandler} />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtistScreen question={questions[0]}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenreScreen question={questions[1]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
