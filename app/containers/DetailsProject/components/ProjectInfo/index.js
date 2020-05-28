import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'stores';
import ProjectInfo from './template';

class ProjectInfoContainer extends React.PureComponent {
  componentDidMount() {
    this.props.profileActions.fetchUsers();
  }

  render() {
    return <ProjectInfo {...this.props} />;
  }
}

ProjectInfoContainer.propTypes = {
  profileActions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(actions.profile, dispatch),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(ProjectInfoContainer);
