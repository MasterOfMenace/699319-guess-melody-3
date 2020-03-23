import {reducer, ActionType} from './data.js';

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
    questions: []
  });
});

it(`Reducer должен обновить questions путем загрузки вопросов с сервера`, () => {
  expect(reducer({
    questions: [],
  }, {
    type: ActionType.LOAD_QUESTIONS,
    payload: questions
  })).toEqual({
    questions
  });
});
