const { expect } = window;

expect(rootReducer(initialState, { type: null })).toEqual(initialState);

const { createStore } = Redux;
const store = createStore(rootReducer);
