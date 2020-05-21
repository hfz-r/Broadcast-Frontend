import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import PermissionIcon from '@material-ui/icons/PermIdentity';
import modalEnhancer from 'providers/ModalEnhancer';
import { Modal, ModalBody, ModalHeader } from 'components';
import ViewPermission from './template';

class ViewPermissionContainer extends React.PureComponent {
  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.modalActions.closeAllModals();
  };

  render() {
    const { permissions, position, total, closeAll } = this.props;

    const content = <ViewPermission data={permissions} closeAll={closeAll} />;

    return (
      <Modal size="medium" position={position} total={total}>
        <ModalHeader
          style={{ borderBottom: 0, paddingBottom: 0 }}
          onClose={closeAll}
          icon={PermissionIcon}
        >
          <FormattedMessage
            id="modals.viewpermission.title"
            defaultMessage="Permission List"
          />
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
      </Modal>
    );
  }
}

ViewPermissionContainer.propTypes = {
  permissions: PropTypes.array,
  position: PropTypes.number,
  total: PropTypes.number,
  closeAll: PropTypes.func,
  modalActions: PropTypes.object,
};

ViewPermissionContainer.defaultProps = {
  position: 1,
  total: 1,
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(actions.modals, dispatch),
});

const enhance = compose(
  modalEnhancer('ViewPermission'),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(ViewPermissionContainer);
