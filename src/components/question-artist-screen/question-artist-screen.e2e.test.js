import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtistScreen from './question-artist-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mockData = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `first`,
        picture: `picture-one`,
      },
      {
        artist: `second`,
        picture: `picture-two`,
      },
      {
        artist: `third`,
        picture: `picture-three`,
      }
    ]
  },
};

const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {question} = mockData;
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `first`,
    picture: `picture-one`
  };

  const gameScreen = shallow(
      <QuestionArtistScreen
        onAnswer={onAnswer}
        question={question}/>
  );

  const answerInputs = gameScreen.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
