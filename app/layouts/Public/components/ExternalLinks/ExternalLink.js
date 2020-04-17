import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'components';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > a': {
      padding: '10px',
    },
  },
}));

const ExternalLink = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div />
      <div className={classes.right}>
        <div className={classes.link}>
          <Link
            href="https://hartalega.com.my/"
            size="11px"
            weight={500}
            color="black"
          >
            Data
          </Link>
          <Link
            href="https://hartalega.com.my/about-us/"
            size="11px"
            weight={500}
            color="black"
          >
            About
          </Link>
          <Link
            href="https://hartalega.com.my/"
            size="11px"
            weight={500}
            color="black"
          >
            Blog
          </Link>
          <Link
            href="https://hartalega.com.my/contact-us/"
            size="11px"
            weight={500}
            color="black"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExternalLink;
