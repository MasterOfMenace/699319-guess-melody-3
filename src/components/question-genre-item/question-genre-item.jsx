import React from 'react';
import PropTypes from 'prop-types';

class QuestionGenreItem extends React.PureComponent {
  render() {
    const {answer, id, onChange, renderPlayer, userAnswer} = this.props;

    return (
      <div className="track">
        {renderPlayer(answer.src, id)}
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${id}`}
            id={`answer-${id}`}
            checked={userAnswer}
            onChange={(evt) => {
              const value = evt.target.checked;

              onChange(id, value);
            }}/>
          <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
        </div>
      </div>
    );
  }
}

QuestionGenreItem.propTypes = {
  answer: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  userAnswer: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default QuestionGenreItem;
