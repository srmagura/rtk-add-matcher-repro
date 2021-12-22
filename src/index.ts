import { createAction, createReducer } from "@reduxjs/toolkit";

interface SpecialAction {
  // Uncomment the next line, and then `action` will be typed correctly
  // type: string;
  payload: number;
}

function isSpecialAction(action: any): action is SpecialAction {
  return action.type.startsWith("special/");
}

const myReducer = createReducer(0, (builder) => {
  builder.addMatcher(isSpecialAction, (state, action) => {
    // Hover over `action` to see that its type is `AnyAction`, not `SpecialAction`
    return action.payload;
  });
});
