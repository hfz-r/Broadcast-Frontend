import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import UserMgmt from './template.success';

class UserMgmtContainer extends React.PureComponent {
  componentDidMount() {
    this.props.profileActions.fetchUsers();
  }

  render() {
    const { data, search, ...rest } = this.props;

    const handleAddUser = () => {
      this.props.modalsActions.showModal('AddUser');
    };

    const props = { handleAddUser };

    return data.cata({
      Success: value => (
        <UserMgmt
          search={search && search.toLowerCase()}
          data={value}
          {...rest}
          {...props}
        />
      ),
      Failure: message => <div>{message}</div>,
      Loading: () => <div />,
      NotAsked: () => <div />,
    });
  }
}

UserMgmtContainer.propTypes = {
  data: PropTypes.object,
  search: PropTypes.string,
  profileActions: PropTypes.object,
  modalsActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.profile.makeSelectUsers(),
  search: state => formValueSelector('mgmtSearch')(state, 'search'),
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(actions.profile, dispatch),
  modalsActions: bindActionCreators(actions.modals, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(UserMgmtContainer);
