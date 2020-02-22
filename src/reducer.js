const initialState = {
  mistakes: 0,
  step: -1
};

export const ActionType = {
  INCREASE_MISTAKES: `increase_mistakes`,
  INCREASE_STEP: `increase_step`
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.payload
      });

    case ActionType.INCREASE_STEP:
      return Object.assign({}, state, {
        step: state.step + action.payload
      });
  }

  return state;
};
