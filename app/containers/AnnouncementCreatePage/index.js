import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { actions, selectors, reducers } from 'stores';
import injectReducer from 'utils/injectReducer';
import AnnouncementCreate from './template';

class AnnouncementCreateContainer extends React.PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {
    const childProps = Object.assign({}, this.props);
    ['toggleMenu', 'computedMatch'].forEach(prop => {
      delete childProps[prop];
    });

    return <AnnouncementCreate {...childProps} />;
  }
}

const mapStateToProps = createStructuredSelector({
  editorState: selectors.editor.makeSelectEditor(),
});

const mapDispatchToProps = dispatch => ({
  editorActions: bindActionCreators(actions.editor, dispatch),
  formActions: bindActionCreators(actions.form, dispatch),
});

const withEditorReducer = injectReducer({
  key: 'editor',
  reducer: reducers.editorReducer,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withEditorReducer,
  withConnect,
)(AnnouncementCreateContainer);
