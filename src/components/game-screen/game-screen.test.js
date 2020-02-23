import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen.jsx';
import {GameType} from '../../const.js';

const children = <div className="children-div"></div>;

it(`Правильное отображение компонента GameScreen с type artist`, () => {
  const tree = renderer.create(
      <GameScreen
        type={GameType.ARTIST}
        mistakes={3}
      >
        {children}
      </GameScreen>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Правильное отображение компонента GameScreen с type genre`, () => {
  const tree = renderer.create(
      <GameScreen
        type={GameType.GENRE}
        mistakes={3}
      >
        {children}
      </GameScreen>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
