import React, { PropTypes } from 'react';
import Typist from 'react-typist';
import { USER, BOT } from 'constants';
import 'styles/MessageList';


function Message({ type, text }) {
  if (type === USER) {
    return <span>{`${text} <`}</span>;
  }
  return (
    <Typist
      avgTypingDelay={50}
      cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
    >
      <span>> </span>
      {text}
    </Typist>
  );
}

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};


export default function MessageList({ messages }) {
  return (
    <div className="MessageList">
      {messages.map((msg, idx) => (
        <div
          key={`MessageList-message(${idx})`}
          className={`MessageList-message MessageList-message--${msg.type}`}
        >
          <Message {...msg} />
        </div>
      ))}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.node,
    type: PropTypes.oneOf([USER, BOT]),
  })),
};

