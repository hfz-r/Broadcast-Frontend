import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    flexGrow: 1,
    height: 42,
    width: 250,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon,
  },
  searchInput: {
    flexGrow: 1,
  },
}));

const Search = field => {
  const { input, meta, className, placeholder } = field;
  const { touched, error, warning } = meta;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          {...input}
          className={classes.searchInput}
          placeholder={placeholder}
          error={touched && (warning || error)}
          disableUnderline
        />
      </Paper>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
