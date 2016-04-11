import React from 'react';
import { ADD_USER_MESSAGE, ADD_BOT_MESSAGE, USER, BOT } from 'constants';


function botReply(text) {
  if (text.indexOf('smart') !== -1) {
    return <span>Not so <a href="#">much</a>.</span>;
  }
  return 'I am your father.';
}

export default function chatMessages(state = [], action) {
  switch (action.type) {
    case ADD_USER_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          type: USER,
          text: action.text,
        },
      ];
    case ADD_BOT_MESSAGE:
      return [
        ...state,
        {
          id: Date.now(),
          type: BOT,
          text: botReply(action.userMessage),
        },
      ];
    default:
      return state;
  }
}
