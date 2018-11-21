import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  Drawer,
  Heading,
  Input,
  Label,
  Textarea,
  Select,
  Toggle
} from '@deskpro/react-components';

class ChatSettings extends React.PureComponent {
  static propTypes = {
    config: PropTypes.object,
    handleChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    config: Immutable.fromJS({})
  };

  noAnswerOptions = [
    { value: '', label: 'Just show busy message' },
    { value: 'save_ticket', label: 'Save missed chat as ticket' },
    { value: 'create_ticket', label: 'Direct the user to new ticket' }
  ];

  departments = [{ value: 3, label: 'Sales' }, { value: 4, label: 'Support' }];

  handleSelectChange = (option, name) => {
    const value = typeof option === 'object' ? option.value : option;
    this.props.handleChange(value, name);
  };

  render() {
    const { config, handleChange } = this.props;
    return (
      <Drawer>
        <Heading>Chat settings</Heading>
        <Toggle
          checked={config.getIn(['chat', 'enabled'])}
          name="chat.enabled"
          onChange={handleChange}
        >
          Enable chat
        </Toggle>
        <br />
        Prompt the user to describe their problem before the chat starts:
        <br />
        <Input
          type="text"
          value={config.getIn(['chat', 'prompt'])}
          name="chat.prompt"
          onChange={handleChange}
        />
        <h4>Who can use chat</h4>
        <h4>Pre-chat form</h4>
        <h4>Unanswered chat</h4>
        If no agents are online to accept a chat, or when the user has waited
        for{' '}
        <Input
          className="small"
          type="text"
          value={config.getIn(['chat', 'timeout'])}
          name="chat.timeout"
        />{' '}
        seconds
        <br />
        <Select
          options={this.noAnswerOptions}
          value={config.getIn(['chat', 'noAnswerBehavior']) || ''}
          onChange={this.handleSelectChange}
          name="chat.noAnswerBehavior"
        />
        <Label>Busy message</Label>
        <Textarea
          name="chat.busyMessage"
          id=""
          cols="40"
          rows="10"
          value={config.getIn(['chat', 'busyMessage'])}
          onChange={handleChange}
        />
        <br />
        <h4>Missed chat ticket properties</h4>
        <Label>Department</Label>
        <Select
          options={this.departments}
          value={config.getIn(['chat', 'ticketDefaults', 'department'])}
          onChange={this.handleSelectChange}
          name="chat.ticketDefaults.department"
        />
        <Label>Subject</Label>
        <Input
          type="text"
          value={config.getIn(['chat', 'ticketDefaults', 'subject'])}
          placeholder="Missed chat from {name}"
          name="chat.ticketDefaults.subject"
        />
      </Drawer>
    );
  }
}
export default ChatSettings;