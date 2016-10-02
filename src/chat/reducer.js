import {
  BOT,
  USER,
  ADD_BOT_MESSAGE,
  ADD_USER_MESSAGE,
} from 'constants';


export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_USER_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          type: USER,
          text: action.message,
        },
      ];
    case ADD_BOT_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          type: BOT,
          text: action.message,
        },
      ];
    default:
      return state;
  }
}
