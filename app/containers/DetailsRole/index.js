/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from 'stores';
import Failure from './template.failure';
import RoleMgmtDetails from './template.success';

class RoleDetailsContainer extends React.PureComponent {
  componentDidMount() {
    const { computedMatch } = this.props;
    this.props.profileActions.fetchRole(computedMatch.params.role);
  }

  render() {
    const { data, ...rest } = this.props;

    return !data
      ? null
      : data.cata({
          Success: value => <RoleMgmtDetails {...rest} data={value} />,
          Failure: error => <Failure error={error} />,
          Loading: () => <div>Loading!</div>,
          NotAsked: () => <div />,
        });
  }
}

RoleDetailsContainer.propTypes = {
  data: PropTypes.object,
  modalsActions: PropTypes.object,
  profileActions: PropTypes.object,
  computedMatch: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const { computedMatch } = ownProps;
  const data = selectors.profile.getRole(state, computedMatch.params.role);
  return { data };
};

const mapDispatchToProps = dispatch => ({
  modalsActions: bindActionCreators(actions.modals, dispatch),
  profileActions: bindActionCreators(actions.profile, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RoleDetailsContainer);
