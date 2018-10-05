import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import MessageBubble from './MessageBubble';
import MessageForm from './MessageForm';

class PromptMessage extends PureComponent {
  static propTypes = {
    prompt: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
  };

  render() {
    const { prompt, onSendMessage } = this.props;

    return (
      <Fragment>
        <MessageBubble origin="system" message={prompt} />
        <MessageForm onSend={onSendMessage} />
      </Fragment>
    );
  }
}

export default PromptMessage;
