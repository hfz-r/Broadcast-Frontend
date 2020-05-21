/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from 'stores';
import Failure from './template.failure';
import ProjectMgmtDetails from './template.success';

class ProjectDetailsContainer extends React.PureComponent {
  componentDidMount() {
    const { computedMatch } = this.props;
    this.props.announcementActions.fetchProject(computedMatch.params.project);
  }

  handleEditProject = payload => {
    this.props.modalsActions.showModal('EditProject', { payload });
  };

  render() {
    const { project, ...rest } = this.props;

    return !project
      ? null
      : project.cata({
          Success: value => (
            <ProjectMgmtDetails
              {...rest}
              project={value}
              handleEditProject={this.handleEditProject}
            />
          ),
          Failure: error => <Failure error={error} />,
          Loading: () => <div>Loading!</div>,
          NotAsked: () => <div />,
        });
  }
}

ProjectDetailsContainer.propTypes = {
  project: PropTypes.object,
  modalsActions: PropTypes.object,
  announcementActions: PropTypes.object,
  computedMatch: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const { computedMatch } = ownProps;
  const project = selectors.announcement.getProject(
    state,
    computedMatch.params.project,
  );
  return { project };
};

const mapDispatchToProps = dispatch => ({
  modalsActions: bindActionCreators(actions.modals, dispatch),
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProjectDetailsContainer);
