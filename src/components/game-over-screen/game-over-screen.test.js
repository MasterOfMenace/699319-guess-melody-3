import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import GameOverScreen from './game-over-screen.jsx';

it(`Правильное отображение компонента GameOverScreen`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameOverScreen
          onReplayButtonClick={()=>{}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
