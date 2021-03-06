import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from './question-genre-screen.jsx';

const question = {
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
};

it(`Should QuestionArtistScreen render correctly`, () => {
  const tree = renderer
    .create(<QuestionGenreScreen
      question={question}
      onAnswer={()=>{}}
      onChange={()=>{}}
      userAnswers={[false, false, false, false]}
      renderPlayer={()=>{}}/>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
