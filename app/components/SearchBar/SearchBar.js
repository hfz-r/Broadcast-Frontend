import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Filter, Search } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480,
  },
  filterButton: {
    marginLeft: 'auto',
  },
  filterIcon: {
    marginRight: theme.spacing(1),
  },
}));

const SearchBar = props => {
  const { onFilter, className } = props;
  const [openFilter, setOpenFilter] = useState(false);

  const classes = useStyles();

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid className={clsx(classes.root, className)} container spacing={3}>
      <Grid item>
        <Field
          name="search"
          className={classes.search}
          placeholder="Search"
          component={Search}
        />
      </Grid>
      <Grid item>
        <Button
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
        >
          <FilterListIcon className={classes.filterIcon} /> Show filters
        </Button>
      </Grid>
      <Filter
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />
    </Grid>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func,
};

export default reduxForm({
  form: 'mgmtSearch',
})(SearchBar);
