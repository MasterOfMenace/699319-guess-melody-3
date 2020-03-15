import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';
import QuestionGenreItem from '../question-genre-item/question-genre-item.jsx';

class QuestionGenreScreen extends React.PureComponent {
  render() {
    const {onAnswer, onChange, question, renderPlayer, userAnswers} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}>
          {answers.map((answer, index) => (
            <QuestionGenreItem
              id={index}
              answer={answer}
              key={`${index}-${answer.src}`}
              onChange={onChange}
              renderPlayer={renderPlayer}
              userAnswer={userAnswers[index]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired
};

export default QuestionGenreScreen;
