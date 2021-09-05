import { createStore } from "redux";
import ActionType from "./globalActionType";

export const inititialStore = {
  defaultSeachType: "DUCKDUCKGO",
};

// Reducer
export const RootReducer = (state = inititialStore, action: any) => {
  switch (action.type) {
    case ActionType.SEARCH_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// Dispatching Action
// Subscription
