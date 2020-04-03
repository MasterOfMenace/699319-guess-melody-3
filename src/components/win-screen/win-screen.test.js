import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import WinScreen from './win-screen.jsx';
import history from '../../history.js';

describe(`Правильное отображение компонента WinScreen`, () => {
  it(`С 3 вопросами и 0 ошибок`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <WinScreen
            questionsCount={3}
            mistakes={0}
            onReplayButtonClick={()=>{}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`С 3 вопросами и 1 ошибкой`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <WinScreen
            questionsCount={3}
            mistakes={1}
            onReplayButtonClick={()=>{}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
