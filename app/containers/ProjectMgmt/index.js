import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import ProjectMgmt from './template.success';

class ProjectMgmtContainer extends React.PureComponent {
  componentDidMount() {
    this.props.announcementActions.fetchProjects();
  }

  render() {
    const { data, search, ...rest } = this.props;

    const handleAddProject = () => {
      this.props.modalsActions.showModal('AddProject');
    };

    const props = { handleAddProject };

    return data.cata({
      Success: value => (
        <ProjectMgmt
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

ProjectMgmtContainer.propTypes = {
  data: PropTypes.object,
  search: PropTypes.string,
  announcementActions: PropTypes.object,
  modalsActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectProjects(),
  search: state => formValueSelector('mgmtSearch')(state, 'search'),
});

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
  modalsActions: bindActionCreators(actions.modals, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(ProjectMgmtContainer);
