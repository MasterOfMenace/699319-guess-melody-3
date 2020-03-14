import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import {GameType} from '../../const.js';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import QuestionArtistScreen from '../question-artist-screen/question-artist-screen.jsx';
import QuestionGenreScreen from '../question-genre-screen/question-genre-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import WinScreen from '../win-screen/win-screen.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player.jsx';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.jsx';

const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withActivePlayer(withUserAnswer(QuestionGenreScreen));

class App extends React.PureComponent {
  _renderGameScreen() {
    const {
      maxMistakes,
      mistakes,
      questions,
      onWelcomeButtonClick,
      onUserAnswer,
      resetGame,
      step
    } = this.props;

    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}/>
      );
    }

    if (mistakes >= maxMistakes) {
      return (
        <GameOverScreen
          onReplayButtonClick={resetGame}
        />
      );
    }

    if (step >= questions.length) {
      return (
        <WinScreen
          questionsCount={questions.length}
          mistakes={mistakes}
          onReplayButtonClick={resetGame}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <QuestionArtistScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <QuestionGenreScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtistScreenWrapped
              question={questions[0]}
              onAnswer={()=>{}}/>
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenreScreenWrapped
              question={questions[1]}
              onAnswer={()=>{}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  mistakes: state.mistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.increaseStep());
  },

  onUserAnswer(question, answer) {
    dispatch(ActionCreator.increaseMistakes(question, answer));
    dispatch(ActionCreator.increaseStep());
  },

  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
