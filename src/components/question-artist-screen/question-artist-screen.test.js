import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtistScreen from './question-artist-screen.jsx';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      artist: `John Snow`,
      picture: `https://api.adorable.io/avatars/128/0`,
    },
    {
      artist: `Jack Daniels`,
      picture: `https://api.adorable.io/avatars/128/1`,
    },
    {
      artist: `Jim Beam`,
      picture: `https://api.adorable.io/avatars/128/2`,
    }
  ]
};

it(`Should QuestionArtistScreen render correctly`, () => {
  const tree = renderer
    .create(<QuestionArtistScreen
      question={question}
      onAnswer={()=>{}}
      renderPlayer={()=>{}}/>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
