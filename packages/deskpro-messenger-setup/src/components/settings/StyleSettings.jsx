import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Colorpicker, Heading, Icon, Label, ListElement, Section, Subheading } from '@deskpro/react-components';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

class StyleSettings extends React.PureComponent {
  static propTypes = {
    config: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    opened: PropTypes.bool
  };

  static defaultProps = {
    config: Immutable.fromJS({}),
    opened: true
  };

  render() {
    const { config, handleChange, opened, onClick } = this.props;
    const drawerProps = {
      'data-dp-toggle-id': this.props['data-dp-toggle-id'],
      className: 'dp-column-drawer'
    };
    return (
      <ListElement {...drawerProps}>
        <Heading onClick={onClick} className={'dp-ms-section-header'}>
          Widget Settings
          &nbsp;
          <Icon
            key="icon"
            aria-hidden
            onClick={onClick}
            className="dp-column-drawer__arrow dp-ms-section-header"
            name={opened ? faCaretUp : faCaretDown}
          />
        </Heading>
        <Section hidden={!opened}>
          <Section className='dp-ms-section'>
            <Label>Primary color</Label>
            <Colorpicker
              value={config.getIn(['styles', 'primaryColor'])}
              name="styles.primaryColor"
              onChange={handleChange}
              format="hex"
            />

            <Label>Secondary (background) color</Label>
            <Colorpicker
              value={config.getIn(['styles', 'backgroundColor'])}
              name="styles.backgroundColor"
              onChange={handleChange}
              format="hex"
            />

            <Label>Text & Icon color</Label>
            <Colorpicker
              value={config.getIn(['styles', 'textColor'])}
              name="styles.textColor"
              onChange={handleChange}
              format="hex"
            />

          </Section>
        </Section>
      </ListElement>
    );
  }
}
export default StyleSettings;
