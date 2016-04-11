import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';
import Intro from 'components/Intro';
import MessageList from 'components/MessageList';
import 'styles/ChatContainer';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps({ introDone, chatMessages }) {
  return { introDone, messages: chatMessages };
}

class ChatContainer extends Component {

  static propTypes = {
    introDone: PropTypes.bool,
    messages: PropTypes.array,
    finishIntro: PropTypes.func,
    addUserMessage: PropTypes.func,
    addBotMessage: PropTypes.func,
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
      const { addUserMessage, addBotMessage } = this.props;
      this.clearInput();
      addUserMessage(inputValue);
      addBotMessage(inputValue);
    }
  }

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  clearInput() {
    this.setState({ inputValue: '' });
  }

  render() {
    const { introDone, messages, finishIntro } = this.props;
    const { inputValue } = this.state;
    const ready = introDone ? ' ChatContainer-input--ready' : '';

    return (
      <div className="ChatContainer">
        <div className="ChatContainer-inner" ref="chatBoxInner">
          <Intro onIntroDone={finishIntro} />
          <MessageList messages={messages} />
        </div>
        <div className={`ChatContainer-input${ready}`}>
          <span>> </span>
          <input
            autoFocus
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
