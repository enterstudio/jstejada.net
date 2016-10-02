import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from 'actions';
import Intro from 'components/Intro';
import MessageList from 'components/MessageList';
import 'styles/ChatContainer';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

function mapStateToProps({ isIntroDone, messages }) {
  return { isIntroDone, messages };
}

class ChatContainer extends Component {

  static propTypes = {
    isIntroDone: PropTypes.bool,
    messages: PropTypes.array,
    finishIntro: PropTypes.func,
    addUserMessage: PropTypes.func,
    fetchBotMessage: PropTypes.func,
  }

  state = {
    inputValue: '',
  };

  componentDidUpdate() {
    this.refs.chatBoxInner.scrollTop = this.refs.chatBoxInner.scrollHeight;
  }

  onInputKeyDown = (event) => {
    if (['Enter', 'Return'].includes(event.key)) {
      const { inputValue } = this.state;
      const { addUserMessage, fetchBotMessage } = this.props;
      this.clearInput();
      addUserMessage(inputValue);
      fetchBotMessage(inputValue);
    }
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onIntroDone = () => {
    const { finishIntro } = this.props;
    findDOMNode(this.refs.input).focus();
    finishIntro();
  }

  clearInput() {
    this.setState({ inputValue: '' });
  }

  render() {
    const { isIntroDone, messages } = this.props;
    const { inputValue } = this.state;
    const ready = isIntroDone ? ' ChatContainer-input--ready' : '';

    return (
      <div className="ChatContainer">
        <div className="ChatContainer-inner" ref="chatBoxInner">
          <Intro onIntroDone={this.onIntroDone} />
          <MessageList messages={messages} />
        </div>
        <div className={`ChatContainer-input${ready}`}>
          <span>> </span>
          <input
            ref="input"
            type="text"
            value={inputValue}
            onChange={this.onInputChange}
            onKeyDown={this.onInputKeyDown}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
