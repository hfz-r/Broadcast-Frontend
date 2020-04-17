import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import modalEnhancer from 'providers/ModalEnhancer';
import AutoDisconnection from './template';

class AutoDisconnectionContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timeout = undefined;
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.onSubmit, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onSubmit() {
    this.props.authActions.logout();
    this.props.modalActions.closeModal();
  }

  handleCancel() {
    clearTimeout(this.timeout);
    this.props.authActions.startLogoutTimer();
    this.props.modalActions.closeModal();
  }

  render() {
    return (
      <AutoDisconnection
        {...this.props}
        onSubmit={this.onSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}

AutoDisconnectionContainer.defaultProps = {
  duration: 0,
};

AutoDisconnectionContainer.propTypes = {
  duration: PropTypes.number,
  authActions: PropTypes.object,
  modalActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(actions.auth, dispatch),
  modalActions: bindActionCreators(actions.modals, dispatch),
});

const enhance = compose(
  modalEnhancer('AutoDisconnection'),
  connect(
    undefined,
    mapDispatchToProps,
  ),
);

export default enhance(AutoDisconnectionContainer);