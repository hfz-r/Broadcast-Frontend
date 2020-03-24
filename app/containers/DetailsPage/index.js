import React from 'react';
import AnnouncementDetails from './template';

class AnnouncementDetailsContainer extends React.PureComponent {
  render() {
    return <AnnouncementDetails {...this.props} />;
  }
}

export default AnnouncementDetailsContainer;
