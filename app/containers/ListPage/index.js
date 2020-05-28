import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { actions, selectors } from 'stores';
import Loading from './template.loading';
import Failure from './template.failure';
import AnnouncementList from './template.success';

class AnnouncementListContainer extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    announcementActions: PropTypes.object,
  };

  componentDidMount() {
    this.props.announcementActions.fetchMessages();
  }

  render() {
    const { data, ...rest } = this.props;

    return data.cata({
      Success: value => <AnnouncementList announcements={value} {...rest} />,
      Failure: message => <Failure message={message} />,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
    });
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectMessages(),
});

const mapDispatchToProps = dispatch => ({
  announcementActions: bindActionCreators(actions.announcement, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AnnouncementListContainer);
