import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import modalEnhancer from 'providers/ModalEnhancer';
import AddProject from './template';

class AddProjectContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit = values => {
    this.props.announcementActions.createProject(values);
    this.props.modalActions.closeModal();
  };

  handleCancel() {
    this.props.modalActions.closeModal();
  }

  render() {
    return (
      <AddProject
        {...this.props}
        onSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}
AddProjectContainer.propTypes = {
  modalActions: PropTypes.object,
  announcementActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
  modalActions: bindActionCreators(actions.modals, dispatch),
});

const enhance = compose(
  modalEnhancer('AddProject'),
  connect(
    undefined,
    mapDispatchToProps,
  ),
);

export default enhance(AddProjectContainer);
