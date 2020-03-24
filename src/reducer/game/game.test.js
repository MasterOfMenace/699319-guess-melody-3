import {reducer, ActionType, ActionCreator} from './game.js';

it(`Reducer без параметров должен вернуть исходное состояние (initialState)`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
  });
});

it(`Reducer должен увеличивать шаг в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 0,
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
  });
});

it(`Reducer должен увеличивать число ошибок в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: -1,
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
  });
});

it(`Reducer должен вернуть store в начальное состояние и step: 0`, () => {
  expect(reducer({
    mistakes: 0,
    step: 1,
  }, {
    type: ActionType.RESET_GAME,
  })).toEqual({
    mistakes: 0,
    step: 0,
    maxMistakes: 3,
  });

  expect(reducer({
    mistakes: 3,
    step: 2,
  }, {
    type: ActionType.RESET_GAME
  })).toEqual({
    mistakes: 0,
    step: 0,
    maxMistakes: 3,
  });
});

describe(`Корректная работа ActionCreator`, () => {
  it(`ActionCreator.increaseStep возвращает корректный action`, () => {
    expect(ActionCreator.increaseStep()).toEqual({
      type: ActionType.INCREASE_STEP,
      payload: 1
    });
  });

  it(`ActionCreator.increaseMistakes возвращает action с 0 payload если ответ на вопрос с type artist правильный`, () => {
    expect(ActionCreator.increaseMistakes({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``
    })).toEqual({
      type: ActionType.INCREASE_MISTAKES,
      payload: 0
    });
  });

  it(`ActionCreator.increaseMistakes возвращает action с 1 payload если ответ на вопрос с type artist неправильный`, () => {
    expect(ActionCreator.increaseMistakes({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``
    })).toEqual({
      type: ActionType.INCREASE_MISTAKES,
      payload: 1
    });
  });

  it(`ActionCreator.increaseMistakes возвращает action с 0 payload если ответ на вопрос с type genre правильный`, () => {
    expect(ActionCreator.increaseMistakes({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.INCREASE_MISTAKES,
      payload: 0
    });
  });

  it(`ActionCreator.increaseMistakes возвращает action с 1 payload если ответ на вопрос с type genre неправильный`, () => {
    expect(ActionCreator.increaseMistakes({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `rock`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREASE_MISTAKES,
      payload: 1
    });
  });

  it(`ActionCreator.resetGame должен вернуть корректный action`, () => {
    expect(ActionCreator.resetGame())
    .toEqual({
      type: ActionType.RESET_GAME
    });
  });
});
