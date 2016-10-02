import React from 'react';
import fetch from 'isomorphic-fetch';
import {
  ADD_BOT_MESSAGE,
  ADD_USER_MESSAGE,
  API_SERVER,
} from 'constants';


function botReply(text) {
  if (text.indexOf('smart') !== -1) {
    return <span>Not so <a href="#">much</a>.</span>;
  }
  return 'I am your father.';
}

export function addUserMessage(message) {
  return { type: ADD_USER_MESSAGE, message };
}

export function addBotMessage(message, json) {
  return { type: ADD_BOT_MESSAGE, message, json };
}

export function fetchBotMessage(userMessage) {
  return (dispatch) => {
    dispatch(addBotMessage('...'));
    return fetch(`${API_SERVER}/bot/reply`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(addBotMessage(data.reply));
    })
    .catch(() => {
      dispatch(addBotMessage(botReply(userMessage)));
    });
  };
}
