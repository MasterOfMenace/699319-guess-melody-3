import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import {GameScreen} from './game-screen.jsx';
import {GameType} from '../../const.js';

const children = <div className="children-div"></div>;

it(`Правильное отображение компонента GameScreen с type artist`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameScreen
          type={GameType.ARTIST}
          mistakes={3}
          goToWelcomeScreen={()=>{}}
        >
          {children}
        </GameScreen>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Правильное отображение компонента GameScreen с type genre`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameScreen
          type={GameType.GENRE}
          mistakes={3}
          goToWelcomeScreen={()=>{}}
        >
          {children}
        </GameScreen>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
