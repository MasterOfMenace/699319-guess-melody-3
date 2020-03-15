import React from 'react';
import renderer from 'react-test-renderer';
import WinScreen from './win-screen.jsx';

describe(`Правильное отображение компонента WinScreen`, () => {
  it(`С 3 вопросами и 0 ошибок`, () => {
    const tree = renderer.create(
        <WinScreen
          questionsCount={3}
          mistakes={0}
          onReplayButtonClick={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`С 3 вопросами и 1 ошибкой`, () => {
    const tree = renderer.create(
        <WinScreen
          questionsCount={3}
          mistakes={1}
          onReplayButtonClick={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
