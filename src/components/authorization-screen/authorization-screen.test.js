import React from 'React';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen.jsx';

it(`Правильное отображение компонента AuthorizationScreen`, () => {
  const tree = renderer
    .create(
        <AuthorizationScreen
          onReplayButtonClick={()=>{}}
          onSubmit={()=>{}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
