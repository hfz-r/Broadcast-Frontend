import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import Loading from './template.loading';
import ProjectSelector from './template.success';

class ProjectSelectorContainer extends React.PureComponent {
  componentDidMount() {
    this.props.announcementActions.fetchProjects();
  }

  render() {
    const { data, ...rest } = this.props;

    return data.cata({
      Success: value => <ProjectSelector data={value} {...rest} />,
      Failure: message => <div>{message}</div>,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
    });
  }
}

ProjectSelectorContainer.propTypes = {
  data: PropTypes.object,
  announcementActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectProjects(),
});

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(ProjectSelectorContainer);
