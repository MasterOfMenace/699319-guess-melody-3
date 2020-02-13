import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      questions={questions}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
