import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Images from './Images';

const useStyles = makeStyles({
  root: {
    width: props => props.width,
    height: props => props.height,
    color: props => props.color,
  },
});

const Image = props => {
  const { className, name, srcset, ...rest } = props;

  const classes = useStyles(props);
  const file = Images[name];
  const srcSet = srcset
    ? Object.keys(srcset).map(n => `${Images[n]} ${srcset[n]}`)
    : [];
  if (!file) {
    return <img alt="" />;
  }
  return (
    <img
      className={clsx(classes.root, className)}
      alt="Images"
      src={file}
      srcSet={srcSet.join(', ')}
      {...rest}
    />
  );
};

Image.defaultProps = {
  width: 'auto',
  height: 'auto',
  color: 'auto',
};

Image.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  srcset: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default Image;
