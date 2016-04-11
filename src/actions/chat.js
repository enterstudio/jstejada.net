import { ADD_USER_MESSAGE, ADD_BOT_MESSAGE } from 'constants';


export function addUserMessage(text) {
  return { type: ADD_USER_MESSAGE, text };
}

export function addBotMessage(userMessage) {
  return { type: ADD_BOT_MESSAGE, userMessage };
}
