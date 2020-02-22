import {reducer, ActionType} from './reducer.js';

it(`Reducer без параметров должен вернуть исходное состояние (initialState)`, () => {
  expect(reducer(void 0, {})).toEqual({
    mistakes: 0,
    step: -1
  });
});

it(`Reducer должен увеличивать шаг в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 1
  })).toEqual({
    mistakes: 0,
    step: 0
  });

  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREASE_STEP,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1
  });
});

it(`Reducer должен увеличивать число ошибок в соответствии с переданным значением`, () => {
  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 1
  })).toEqual({
    mistakes: 1,
    step: -1
  });

  expect(reducer({
    mistakes: 0,
    step: -1
  }, {
    type: ActionType.INCREASE_MISTAKES,
    payload: 0
  })).toEqual({
    mistakes: 0,
    step: -1
  });
});
