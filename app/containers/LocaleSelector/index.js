import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { actions } from 'stores';
import LocaleSelector from './templates';

class LocaleSelectorContainer extends React.PureComponent {
  static propTypes = {
    locale: PropTypes.string,
  };

  render() {
    const childProps = pick(['locale', 'onChangeLocale'], this.props);
    return <LocaleSelector {...childProps} />;
  }
}

const mapStateToProps = state => ({
  locale: state.preferences.locale,
});

const mapDispatchToProps = dispatch => ({
  onChangeLocale: value => dispatch(actions.preferences.changeLocale(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleSelectorContainer);
