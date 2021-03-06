import {GameType} from '../../const.js';

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, index) => {
    return it === (question.answers[index].genre === question.genre);
  });
};

export const ActionType = {
  INCREASE_MISTAKES: `increase_mistakes`,
  INCREASE_STEP: `increase_step`,
  RESET_GAME: `reset_game`,
};

export const ActionCreator = {
  increaseStep: () => ({
    type: ActionType.INCREASE_STEP,
    payload: 1
  }),

  increaseMistakes: (question, userAnswer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        isAnswerCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        isAnswerCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREASE_MISTAKES,
      payload: isAnswerCorrect ? 0 : 1
    };
  },

  resetGame: () => ({
    type: ActionType.RESET_GAME
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload
      });

    case ActionType.INCREASE_STEP:
      return Object.assign({}, state, {
        step: state.step + action.payload
      });

    case ActionType.RESET_GAME:
      return Object.assign({}, initialState, {
        step: 0
      });
  }

  return state;
};
