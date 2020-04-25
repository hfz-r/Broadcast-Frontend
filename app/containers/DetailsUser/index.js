/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from 'stores';
import Failure from './template.failure';
import UserMgmtDetails from './template.success';

class UserMgmtDetailsContainer extends React.PureComponent {
  componentDidMount() {
    const { computedMatch } = this.props;
    this.props.profileActions.getUserInfo(computedMatch.params.username);
  }

  handleSubmit = values => {
    const { computedMatch } = this.props;
    this.props.profileActions.editUserInfo(
      computedMatch.params.username,
      values,
    );
  };

  render() {
    const { user, ...rest } = this.props;

    return !user
      ? null
      : user.cata({
          Success: value => (
            <UserMgmtDetails
              {...rest}
              user={value}
              handleSubmit={this.handleSubmit}
            />
          ),
          Failure: error => <Failure error={error} />,
          Loading: () => <div>Loading!</div>,
          NotAsked: () => <div />,
        });
  }
}

UserMgmtDetailsContainer.propTypes = {
  user: PropTypes.object,
  profileActions: PropTypes.object,
  computedMatch: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const { computedMatch } = ownProps;
  const user = selectors.profile.getUserInfo(
    state,
    computedMatch.params.username,
  );
  return { user };
};

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(actions.form, dispatch),
  profileActions: bindActionCreators(actions.profile, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserMgmtDetailsContainer);
