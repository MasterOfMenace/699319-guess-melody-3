import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';

const mockStore = configureStore([]);

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

describe(`Отображение компонента App`, () => {
  it(`Отображение компонента WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={-1}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Отображение компонента QuestionGenreScreen`, () => {
    const store = mockStore({
      mistakes: 3
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Отображение компонента QuestionArtistScreen`, () => {
    const store = mockStore({
      mistakes: 0
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              questions={questions}
              onUserAnswer={()=>{}}
              onWelcomeButtonClick={()=>{}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
