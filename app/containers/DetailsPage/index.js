/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from 'stores';
import Loading from './template.loading';
import Failure from './template.failure';
import AnnouncementDetails from './template.success';

class AnnouncementDetailsContainer extends React.PureComponent {
  componentDidMount() {
    const { computedMatch } = this.props;
    this.props.announcementActions.fetchMessage(computedMatch.params.slug);
  }

  render() {
    const { data, ...rest } = this.props;

    return !data
      ? null
      : data.cata({
          Success: value => (
            <AnnouncementDetails {...rest} announcement={value} />
          ),
          Failure: message => <Failure message={message} />,
          Loading: () => <Loading />,
          NotAsked: () => <Loading />,
        });
  }
}

AnnouncementDetailsContainer.propTypes = {
  data: PropTypes.object,
  computedMatch: PropTypes.object.isRequired,
  announcementActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  const { computedMatch } = ownProps;
  const data = selectors.announcement.getMessage(
    state,
    computedMatch.params.slug,
  );
  return { data };
};

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AnnouncementDetailsContainer);
