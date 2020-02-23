import {reducer, ActionType, ActionCreator} from './reducer.js';

const questions = [
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        artist: `John Snow`,
        picture: `https://api.adorable.io/avatars/128/1`,
      },
      {
        artist: `Ozzy Osbourne`,
        picture: `https://api.adorable.io/avatars/128/2`,
      },
      {
        artist: `Jim Beam`,
        picture: `https://api.adorable.io/avatars/128/3`,
      }
    ],
  },
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `blues`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      }
    ],
  },
];

it(`Reducer без параметров должен вернуть исходное состояние (initialState)`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1,
    maxMistakes: 3,
    questions
  });
});

it(`Reducer должен увеличивать шаг в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
    questions
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 0,
    questions
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
    questions
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
    questions
  });
});

it(`Reducer должен увеличивать число ошибок в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1,
    questions
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: -1,
    questions
  });

  expect(reducer({
    mistakes: 0,
    step: -1,
    questions
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1,
    questions
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
});
