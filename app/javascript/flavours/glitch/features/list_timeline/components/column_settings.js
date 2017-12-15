import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import SettingToggle from 'flavours/glitch/features/notifications/components/setting_toggle';
import SettingText from 'flavours/glitch/components/setting_text';

const messages = defineMessages({
  filter_regex: { id: 'list_timeline.column_settings.filter_regex', defaultMessage: 'Filter out by regular expressions' },
  settings: { id: 'list_timeline.settings', defaultMessage: 'Column settings' },
});

@injectIntl
export default class ColumnSettings extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  render () {
    const { settings, onChange, intl } = this.props;

    return (
      <div>
        <span className='column-settings__section'><FormattedMessage id='list_timeline.column_settings.basic' defaultMessage='Basic' /></span>

        <div className='column-settings__row'>
          <SettingToggle prefix='list_timeline' settings={settings} settingKey={['shows', 'reblog']} onChange={onChange} label={<FormattedMessage id='list_timeline.column_settings.show_reblogs' defaultMessage='Show boosts' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='list_timeline' settings={settings} settingKey={['shows', 'reply']} onChange={onChange} label={<FormattedMessage id='list_timeline.column_settings.show_replies' defaultMessage='Show replies' />} />
        </div>

        <span className='column-settings__section'><FormattedMessage id='list_timeline.column_settings.advanced' defaultMessage='Advanced' /></span>

        <div className='column-settings__row'>
          <SettingText prefix='list_timeline' settings={settings} settingKey={['regex', 'body']} onChange={onChange} label={intl.formatMessage(messages.filter_regex)} />
        </div>
      </div>
    );
  }

}
