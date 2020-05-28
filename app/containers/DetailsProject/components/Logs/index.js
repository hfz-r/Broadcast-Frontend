import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectors } from 'stores';
import Loading from './template.loading';
import AnnouncementLog from './template.success';

class AnnouncementLogContainer extends React.PureComponent {
  componentDidMount() {
    this.props.announcementActions.fetchMessages();
  }

  render() {
    const { data, messageIds } = this.props;
    return data.cata({
      Success: value => {
        const messages = filter(d => messageIds.includes(d.message_id))(
          value.messages,
        );
        return <AnnouncementLog messages={messages} />;
      },
      Failure: message => <div>{message}</div>,
      Loading: () => <Loading />,
      NotAsked: () => <Loading />,
    });
  }
}

AnnouncementLogContainer.propTypes = {
  data: PropTypes.object,
  messageIds: PropTypes.array,
  announcementActions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: selectors.announcement.makeSelectMessages(),
});

const withConnect = connect(
  mapStateToProps,
  undefined,
);
export default compose(withConnect)(AnnouncementLogContainer);
