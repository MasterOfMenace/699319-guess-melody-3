import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionGenreScreen from './question-genre-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mockData = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        genre: `rock`,
        src: `path`
      },
      {
        genre: `blues`,
        src: `path`
      },
      {
        genre: `pop`,
        src: `path`
      },
      {
        genre: `reggae`,
        src: `path`
      },
    ]
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`When user answers genre question form is not sent`, () => {
  const {question} = mockData;
  const onAnswer = jest.fn();

  const gameScreen = shallow(
      <QuestionGenreScreen
        onAnswer={onAnswer}
        onChange={() => {}}
        question={question}
        userAnswers={[false, false, false, false]}
        renderPlayer={()=>{}}/>
  );

  const form = gameScreen.find(`form`);
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
});

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mockData;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const gameScreen = mount(
      <QuestionGenreScreen
        onAnswer={onAnswer}
        onChange={() => {}}
        question={question}
        userAnswers={userAnswer}
        renderPlayer={()=>{}}/>
  );

  const form = gameScreen.find(`form`);
  const inputTwo = gameScreen.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(gameScreen.find(`input`).map((it) => it.prop(`checked`))).toEqual(userAnswer);
});

