import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import RoleMgmt from './template.success';

class RoleMgmtContainer extends React.PureComponent {
  componentDidMount() {
    this.props.profileActions.fetchRoles();
  }

  render() {
    const { data, search, ...rest } = this.props;

    return data.cata({
      Success: value => (
        <RoleMgmt
          search={search && search.toLowerCase()}
          data={value}
          {...rest}
        />
      ),
      Failure: message => <div>{message}</div>,
      Loading: () => <div />,
      NotAsked: () => <div />,
    });
  }
}

RoleMgmtContainer.propTypes = {
  data: PropTypes.object,
  search: PropTypes.string,
  profileActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.profile.makeSelectRoles(),
  search: state => formValueSelector('mgmtSearch')(state, 'search'),
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(actions.profile, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RoleMgmtContainer);
