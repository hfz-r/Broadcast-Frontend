import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import modalEnhancer from 'providers/ModalEnhancer';
import AddUser from './template';

class AddUserContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit = values => {
    this.props.profileActions.createUser(values);
    this.props.modalActions.closeModal();
  };

  handleCancel() {
    this.props.modalActions.closeModal();
  }

  render() {
    return (
      <AddUser
        {...this.props}
        onSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}

AddUserContainer.propTypes = {
  modalActions: PropTypes.object,
  profileActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(actions.profile, dispatch),
  modalActions: bindActionCreators(actions.modals, dispatch),
});

const enhance = compose(
  modalEnhancer('AddUser'),
  connect(
    undefined,
    mapDispatchToProps,
  ),
);

export default enhance(AddUserContainer);
