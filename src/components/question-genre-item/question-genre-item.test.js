import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreItem from './question-genre-item.jsx';

const answer = {
  genre: `rock`,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
};

it(`Првильное отображение компонента QuestionGenreItem`, () => {
  const tree = renderer.create(
      <QuestionGenreItem
        answer={answer}
        id={0}
        onChange={()=>{}}
        renderPlayer={()=>{}}
        userAnswer={false}
      />
  );

  expect(tree).toMatchSnapshot();
});
