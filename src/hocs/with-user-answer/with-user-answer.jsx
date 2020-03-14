import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const.js';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false)
      };

      this.answerHandler = this.answerHandler.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
    }

    answerHandler() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    changeHandler(i, value) {
      const {answers} = this.state;

      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers
      });
    }

    render() {
      const {answers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onAnswer={this.answerHandler}
          onChange={this.changeHandler}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
      genre: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.shape({
        genre: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
