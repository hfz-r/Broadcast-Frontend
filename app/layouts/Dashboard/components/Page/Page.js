import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  // height: 'calc(100% - 20px)',
  overflowY: 'auto',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% - 256px)',
    marginLeft: 256,
  },
  '& div': {
    boxSizing: 'border-box',
  },
}));

class PageContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.children.props.computedMatch.url !==
      this.props.children.props.computedMatch.url
    ) {
      this.node.scrollTop = 0;
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return (
      <Wrapper
        ref={node => {
          this.node = node;
        }}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
