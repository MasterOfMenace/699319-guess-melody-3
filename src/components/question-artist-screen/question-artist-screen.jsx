import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const';

const QuestionArtistScreen = ({onAnswer, question, renderPlayer}) => {
  const {answers, song} = question;
  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, index) => (
          <div key={answer.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer"
              value={`answer-${index}`}
              id={`answer-${index}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}/>
            <label className="artist__name" htmlFor={`answer-${index}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

QuestionArtistScreen.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired
};

export default QuestionArtistScreen;
