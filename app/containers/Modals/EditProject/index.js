import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import modalEnhancer from 'providers/ModalEnhancer';
import EditProject from './template';

class EditProjectContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit = values => {
    const { payload } = this.props;
    this.props.announcementActions.editProject(payload.slug, values);
    this.props.modalsActions.closeModal();
  };

  handleCancel() {
    this.props.modalsActions.closeModal();
  }

  render() {
    return (
      <EditProject
        {...this.props}
        onSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}

EditProjectContainer.propTypes = {
  payload: PropTypes.object,
  modalsActions: PropTypes.object,
  announcementActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  modalsActions: bindActionCreators(actions.modals, dispatch),
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const enhance = compose(
  modalEnhancer('EditProject'),
  connect(
    undefined,
    mapDispatchToProps,
  ),
);

export default enhance(EditProjectContainer);
